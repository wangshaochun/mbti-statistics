export type Option = { value: string; text: string };
export type Question = { id: number; text: string; options: Option[] };
export type TypeDesc = { name: string; description: string; color: string };

export const questions: Question[] = [
  { id: 0, text: 'パーティーや集まりで、あなたは：', options: [ { value: 'E', text: '積極的に多くの人と話をする' }, { value: 'I', text: '少数の親しい人とじっくり話す' } ] },
  { id: 1, text: '新しい情報を得るとき、あなたは：', options: [ { value: 'S', text: '具体的な事実やデータを重視する' }, { value: 'N', text: '可能性やパターンを探る' } ] },
  { id: 2, text: '決断を下すとき、あなたは：', options: [ { value: 'T', text: '論理的分析を基にする' }, { value: 'F', text: '人への影響や価値観を考慮する' } ] },
  { id: 3, text: '日常生活では：', options: [ { value: 'J', text: '計画を立てて規則正しく過ごす' }, { value: 'P', text: '柔軟に対応し自由度を保つ' } ] },
  { id: 4, text: 'ストレスを感じたとき：', options: [ { value: 'E', text: '人と話して解消する' }, { value: 'I', text: '一人の時間で回復する' } ] },
  { id: 5, text: '問題解決のアプローチは：', options: [ { value: 'S', text: '過去の経験や実績を参考にする' }, { value: 'N', text: '新しい視点や革新的な方法を模索する' } ] },
  { id: 6, text: '批判を受けたとき：', options: [ { value: 'T', text: '客観的に内容を分析する' }, { value: 'F', text: '感情的に受け止めることが多い' } ] },
  { id: 7, text: '週末の予定について：', options: [ { value: 'J', text: '事前にしっかり計画を立てる' }, { value: 'P', text: 'その時の気分で決める' } ] },
];

export const typeDescriptions: Record<string, TypeDesc> = {
  ENFJ: { name: '主人公', description: 'カリスマ性があり魅力的なリーダー', color: 'from-green-500 to-emerald-600' },
  INFP: { name: '仲介者', description: '詩的で親切な利他主義者', color: 'from-blue-500 to-cyan-600' },
  ENTJ: { name: '指揮官', description: '大胆で想像力豊かなリーダー', color: 'from-purple-500 to-indigo-600' },
  ENFP: { name: '広報運動家', description: '情熱的で創造的な自由人', color: 'from-green-400 to-blue-500' },
  INTJ: { name: '建築家', description: '想像力豊かな戦略家', color: 'from-purple-600 to-blue-600' },
  INFJ: { name: '提唱者', description: '創造的で洞察力のある理想主義者', color: 'from-indigo-500 to-purple-500' },
  ENTP: { name: '討論者', description: '聡明で好奇心旺盛な思想家', color: 'from-orange-500 to-red-500' },
  INTP: { name: '論理学者', description: '革新的な発明家', color: 'from-gray-500 to-blue-500' },
  ESTJ: { name: '幹部', description: '優秀な管理者', color: 'from-blue-600 to-indigo-600' },
  ISTJ: { name: '管理者', description: '実用的で事実重視の信頼できる人', color: 'from-gray-600 to-blue-600' },
  ESFJ: { name: '領事', description: '思いやりがあり社交的で人気者', color: 'from-pink-500 to-rose-500' },
  ISFJ: { name: '擁護者', description: '温厚で献身的な保護者', color: 'from-teal-500 to-green-500' },
  ESTP: { name: '起業家', description: '賢くエネルギッシュな知覚者', color: 'from-orange-600 to-yellow-500' },
  ISTP: { name: '巨匠', description: '大胆で実践的な実験者', color: 'from-gray-600 to-green-600' },
  ESFP: { name: 'エンターテイナー', description: '自発性がありエネルギッシュで熱心', color: 'from-pink-600 to-purple-500' },
  ISFP: { name: '冒険家', description: '柔軟性がある魅力的な芸術家', color: 'from-green-600 to-teal-500' },
};
