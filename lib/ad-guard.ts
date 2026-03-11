const STORAGE_KEY = "ad-guard";
const MAX_CLICKS = 3;
const WINDOW_MS = 60 * 60 * 1000; // 1시간

interface GuardData {
  clicks: number;
  firstClickAt: number;
}

function getData(): GuardData | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as GuardData;
  } catch {
    return null;
  }
}

function setData(data: GuardData) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // localStorage 사용 불가 (시크릿모드 등)
  }
}

/** 현재 차단 상태인지 확인 */
export function isBlocked(): boolean {
  const data = getData();
  if (!data) return false;

  // 시간 초과 → 리셋
  if (Date.now() - data.firstClickAt > WINDOW_MS) {
    localStorage.removeItem(STORAGE_KEY);
    return false;
  }

  return data.clicks >= MAX_CLICKS;
}

/** 클릭 1회 기록, 차단 여부 반환 */
export function recordClick(): boolean {
  const now = Date.now();
  const data = getData();

  // 기존 데이터 없거나 시간 초과 → 새로 시작
  if (!data || now - data.firstClickAt > WINDOW_MS) {
    setData({ clicks: 1, firstClickAt: now });
    return false;
  }

  const updated: GuardData = { ...data, clicks: data.clicks + 1 };
  setData(updated);

  return updated.clicks >= MAX_CLICKS;
}
