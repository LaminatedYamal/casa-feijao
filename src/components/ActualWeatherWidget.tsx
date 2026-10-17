import React, { useEffect, useState } from 'react';
import { Sun, CloudSun, Cloud, CloudFog, CloudRain, CloudSnow, CloudLightning } from '@phosphor-icons/react';

interface Props {
  className?: string;
  lang?: 'pt' | 'en';
}

interface WeatherInfo {
  temp: number;
  apparentTemp: number;
  condition: string;
  weatherCode: number;
  isDay: boolean;
  wind: number;
  humidity: number;
}

function getWeatherDetails(code: number, lang: 'pt' | 'en'): string {
  if (code === 0) return lang === 'pt' ? 'Céu Limpo' : 'Clear Sky';
  if (code === 1 || code === 2) return lang === 'pt' ? 'Pouco Nublado' : 'Partly Cloudy';
  if (code === 3) return lang === 'pt' ? 'Nublado' : 'Overcast';
  if (code >= 45 && code <= 48) return lang === 'pt' ? 'Nevoeiro' : 'Fog';
  if (code >= 51 && code <= 67) return lang === 'pt' ? 'Chuva' : 'Rain';
  if (code >= 71 && code <= 77) return lang === 'pt' ? 'Neve' : 'Snow';
  if (code >= 80 && code <= 82) return lang === 'pt' ? 'Aguaceiros' : 'Showers';
  if (code >= 95) return lang === 'pt' ? 'Trovoada' : 'Thunderstorm';
  return lang === 'pt' ? 'Serra do Gerês' : 'Gerês Mountain';
}

function renderWeatherPhosphorIcon(code: number, isDay: boolean) {
  if (code === 0) {
    return <Sun size={20} weight="fill" className="text-amber-300 animate-spin-slow shrink-0" />;
  }
  if (code === 1 || code === 2) {
    return <CloudSun size={20} weight="fill" className="text-sky-200 shrink-0" />;
  }
  if (code === 3) {
    return <Cloud size={20} weight="fill" className="text-slate-200 shrink-0" />;
  }
  if (code >= 45 && code <= 48) {
    return <CloudFog size={20} weight="fill" className="text-slate-200 shrink-0" />;
  }
  if (code >= 51 && code <= 67 || (code >= 80 && code <= 82)) {
    return <CloudRain size={20} weight="fill" className="text-sky-300 shrink-0" />;
  }
  if (code >= 71 && code <= 77) {
    return <CloudSnow size={20} weight="fill" className="text-sky-100 shrink-0" />;
  }
  if (code >= 95) {
    return <CloudLightning size={20} weight="fill" className="text-amber-400 shrink-0" />;
  }
  return <CloudSun size={20} weight="fill" className="text-sky-200 shrink-0" />;
}

export function ActualWeatherWidget({ className = '', lang = 'pt' }: Props) {
  const [data, setData] = useState<WeatherInfo>({
    temp: 20,
    apparentTemp: 20,
    condition: lang === 'pt' ? 'Pouco Nublado' : 'Partly Cloudy',
    weatherCode: 1,
    isDay: true,
    wind: 6,
    humidity: 54,
  });

  useEffect(() => {
    // Check sessionStorage cache first for instant render
    try {
      const cached = sessionStorage.getItem(`casafeijao_weather_${lang}`);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Date.now() - parsed.timestamp < 600000) {
          setData(parsed.data);
          return;
        }
      }
    } catch (e) {}

    // Exact GPS of Casa Feijão in Vilar da Veiga / Gerês (41.7086° N, 8.1786° W)
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=41.7086&longitude=-8.1786&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m&timezone=auto'
        );
        if (res.ok) {
          const json = await res.json();
          if (json.current) {
            const isDay = json.current.is_day === 1;
            const label = getWeatherDetails(json.current.weather_code, lang);
            const wData = {
              temp: Math.round(json.current.temperature_2m),
              apparentTemp: Math.round(json.current.apparent_temperature),
              condition: label,
              weatherCode: json.current.weather_code,
              isDay,
              wind: Math.round(json.current.wind_speed_10m),
              humidity: Math.round(json.current.relative_humidity_2m),
            };
            setData(wData);
            try {
              sessionStorage.setItem(`casafeijao_weather_${lang}`, JSON.stringify({ timestamp: Date.now(), data: wData }));
            } catch (e) {}
          }
        }
      } catch {
        // Fallback gracefully
      }
    };

    fetchWeather();
    const timer = setInterval(fetchWeather, 600000); // 10 min refresh
    return () => clearInterval(timer);
  }, [lang]);

  const weatherHref = lang === 'pt' ? '/geres#meteorologia' : '/en/geres#meteorologia';

  return (
    <a
      href={weatherHref}
      title={
        lang === 'pt'
          ? `Meteorologia no Gerês: ${data.temp}°C (${data.condition}). Sensação ${data.apparentTemp}°C, Vento ${data.wind} km/h.`
          : `Live Gerês Weather: ${data.temp}°C (${data.condition}). Feels like ${data.apparentTemp}°C, Wind ${data.wind} km/h.`
      }
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#003366] via-[#0B2545] to-[#0047AB] border border-cobalt-400/30 shadow-xs hover:shadow-md transition-all duration-300 flex items-center justify-between px-3.5 py-1.5 text-white select-none hover:scale-[1.02] active:scale-[0.98] ${className}`}
      style={{
        background: 'linear-gradient(135deg, #0B357B 0%, #1A54A6 50%, #003366 100%)',
        boxShadow: '0 3px 10px -2px rgba(11, 37, 69, 0.4), inset 0 1px 1px 0 rgba(255, 255, 255, 0.3)',
      }}
    >
      {/* Top light gloss */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none rounded-t-2xl" />

      {/* Left: Location & Condition */}
      <div className="relative z-10 flex flex-col justify-center min-w-0 pr-2">
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] font-bold tracking-wider uppercase text-white leading-tight font-sans">
            Gerês
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-xs" title="Live" />
        </div>
        <span className="text-[10px] text-sky-100 font-medium truncate max-w-[95px] leading-tight mt-0.5 font-sans">
          {data.condition}
        </span>
      </div>

      {/* Right: Big Crisp Temperature & Phosphor Icon */}
      <div className="relative z-10 flex items-center gap-1.5 shrink-0 pl-1">
        {renderWeatherPhosphorIcon(data.weatherCode, data.isDay)}
        <span className="text-lg sm:text-xl font-bold font-sans tracking-tight text-white leading-none">
          {data.temp}°C
        </span>
      </div>
    </a>
  );
}
