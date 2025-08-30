const API_BASE =
  process.env.NODE_ENV === 'production'
    ? 'https://personal-api-7gfh.onrender.com'
    : 'http://localhost:3001';

async function handle<T>(res: Response): Promise<T> {
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return res.json();
}

export const getClicks = () =>
  fetch(`${API_BASE}/api/counter`, { cache: 'no-store' }).then(handle<{ clicks: number }>);

export const incrClick = () =>
  fetch(`${API_BASE}/api/counter/incr`, { method: 'POST' }).then(handle<{ clicks: number }>);
