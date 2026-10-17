import React, { useEffect, useState } from 'react';
import {
  Sun,
  CloudSun,
  Cloud,
  CloudFog,
  CloudRain,
  Snowflake,
  Lightning,
  type Icon as PhosphorIcon,
} from '@phosphor-icons/react';

interface WeatherData {
  temp: number;
  weatherCode: number;
  isDay: boolean;
}

interface Props {
  lang?: 'pt' | 'en';
}

function getWeatherLabel(code: number, lang: 'pt' | 'en'): { label: string; Icon: PhosphorIcon; colorClass: string } {
  // WMO Weather interpretation codes
  if (code === 0) return { label: lang === 'pt' ? 'Céu Limpo' : 'Clear Sky', Icon: Sun, colorClass: 'text-amber-500' };
  if (code === 1 || code === 2) return { label: lang === 'pt' ? 'Pouco Nublado' : 'Partly Cloudy', Icon: CloudSun, colorClass: 'text-amber-500' };
  if (code === 3) return { label: lang === 'pt' ? 'Nublado' : 'Overcast', Icon: Cloud, colorClass: 'text-[#0B357B]' };
  if (code >= 45 && code <= 48) return { label: lang === 'pt' ? 'Nevoeiro' : 'Fog', Icon: CloudFog, colorClass: 'text-slate-400' };
  if (code >= 51 && code <= 67) return { label: lang === 'pt' ? 'Chuva Ligeira' : 'Light Rain', Icon: CloudRain, colorClass: 'text-[#0B357B]' };
  if (code >= 71 && code <= 77) return { label: lang === 'pt' ? 'Neve' : 'Snow', Icon: Snowflake, colorClass: 'text-sky-400' };
  if (code >= 80 && code <= 82) return { label: lang === 'pt' ? 'Aguaceiros' : 'Showers', Icon: CloudRain, colorClass: 'text-[#0B357B]' };
  if (code >= 95) return { label: lang === 'pt' ? 'Trovoada' : 'Thunderstorm', Icon: Lightning, colorClass: 'text-amber-500' };
  return { label: lang === 'pt' ? 'Serra' : 'Mountain', Icon: CloudSun, colorClass: 'text-[#0B357B]' };
}

export function HeaderWeatherPill({ lang = 'pt' }: Props) {
  const [weather, setWeather] = useState<WeatherData>({
    temp: 20,
    weatherCode: 1,
    isDay: true,
  });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Vilar da Veiga / Gerês coordinates: 41.7086° N, 8.1786° W
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=41.7086&longitude=-8.1786&current=temperature_2m,weather_code,is_day&timezone=auto'
        );
        if (res.ok) {
          const data = await res.json();
          if (data.current) {
            setWeather({
              temp: Math.round(data.current.temperature_2m),
              weatherCode: data.current.weather_code,
              isDay: data.current.is_day === 1,
            });
            setLoaded(true);
          }
        }
      } catch {
        // Fallback gracefully to default mountain temperature
        setLoaded(true);
      }
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 600000); // refresh every 10 min
    return () => clearInterval(interval);
  }, []);

  const info = getWeatherLabel(weather.weatherCode, lang);

  return (
    <a
      href={lang === 'pt' ? '/geres#clima' : '/en/geres#weather'}
      title={lang === 'pt' ? `Meteorologia no Gerês: ${weather.temp}°C, ${info.label}` : `Gerês Weather: ${weather.temp}°C, ${info.label}`}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 hover:bg-white border border-cobalt-200/90 shadow-2xs hover:shadow-xs transition-all duration-200 text-xs font-semibold text-cobalt-950 group"
    >
      <info.Icon size={16} weight="fill" className={`${info.colorClass} group-hover:scale-110 transition-transform shrink-0`} />
      <span className="font-mono font-bold text-cobalt-900">{weather.temp}°C</span>
      <span className="text-granite-400 font-sans text-[11px] hidden sm:inline">
        • {lang === 'pt' ? 'Gerês' : 'Gerês'}
      </span>
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse hidden md:inline"></span>
    </a>
  );
}
