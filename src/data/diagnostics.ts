export type Option = { value: string; text: string };
export type Question = { id: number; text: string; options: Option[] };
export type TypeDesc = { name: string; description: string; color: string };

// 16 個のステートメント。各ステートメントは「はい」を押すと前者のタイプ文字、
// 「いいえ」で反対側の文字を加算する二択形式。
export const questions: Question[] = [
  { id: 0, text: '初対面の人が多い飲み会に参加したら、自分から話しかけて場を盛り上げる', options: [ { value: 'Y', text: 'はい' }, { value: 'N', text: 'いいえ' } ] },
  { id: 1, text: '旅行の計画を立てるとき、事前に時間ごとのスケジュールを作り、それに沿って行動する', options: [ { value: 'Y', text: 'はい' }, { value: 'N', text: 'いいえ' } ] },
  { id: 2, text: '本屋で新しい本を選ぶとしたら、ランキングや口コミを確認してから選ぶ', options: [ { value: 'Y', text: 'はい' }, { value: 'N', text: 'いいえ' } ] },
  { id: 3, text: '友人が仕事の悩みを相談してきたら、「それは大変だね」と共感しながら話を聞く', options: [ { value: 'Y', text: 'はい' }, { value: 'N', text: 'いいえ' } ] },
  { id: 4, text: '仕事や課題で分からないことがあったら、自分で調べるよりもすぐに詳しい人に聞く', options: [ { value: 'Y', text: 'はい' }, { value: 'N', text: 'いいえ' } ] },
  { id: 5, text: 'レストランでメニューを決めるとき、店員のおすすめよりも自分がいつも頼む料理を選ぶ', options: [ { value: 'Y', text: 'はい' }, { value: 'N', text: 'いいえ' } ] },
  { id: 6, text: '旅行先で予定していた観光地が閉まっていたら、別の行き先を探して柔軟に予定を変える', options: [ { value: 'Y', text: 'はい' }, { value: 'N', text: 'いいえ' } ] },
  { id: 7, text: '週末に何も予定がなかったら、特に計画を立てずに気分で行動する', options: [ { value: 'Y', text: 'はい' }, { value: 'N', text: 'いいえ' } ] },
  { id: 8, text: '知らない道を歩いていたら、すぐに地図アプリで現在地と最短ルートを確認する', options: [ { value: 'Y', text: 'はい' }, { value: 'N', text: 'いいえ' } ] },
  { id: 9, text: '誰かと意見が対立したら、相手の気持ちを考えて折衷案を探る', options: [ { value: 'Y', text: 'はい' }, { value: 'N', text: 'いいえ' } ] },
  { id: 10, text: 'グループ作業では、全体を調整するより自分の担当を黙々と仕上げる方だ', options: [ { value: 'Y', text: 'はい' }, { value: 'N', text: 'いいえ' } ] },
  { id: 11, text: '買い物中に予定外の魅力的な商品を見つけても、結局は買わずに元に戻すことが多い', options: [ { value: 'Y', text: 'はい' }, { value: 'N', text: 'いいえ' } ] },
  { id: 12, text: '締め切りが1週間後なら「まだ余裕がある」と思って着手を後回しにしがちだ', options: [ { value: 'Y', text: 'はい' }, { value: 'N', text: 'いいえ' } ] },
  { id: 13, text: 'イベントの集合時間に少し遅れてもあまり気にしない', options: [ { value: 'Y', text: 'はい' }, { value: 'N', text: 'いいえ' } ] },
  { id: 14, text: '友人との予定が急にキャンセルされたら、感情的になって強く理由を問いただしてしまう', options: [ { value: 'Y', text: 'はい' }, { value: 'N', text: 'いいえ' } ] },
  { id: 15, text: '他人の意見を聞いて自分の考えを変えることはあまりない', options: [ { value: 'Y', text: 'はい' }, { value: 'N', text: 'いいえ' } ] },
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
