// 날짜 데이터 '.' -> '-' 치환 함수
export function formatDate(date: string | undefined) {
  if (date) return date.replace(/\./g, "-");
  return null;
}
