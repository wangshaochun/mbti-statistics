export const allTypes = ['infp','enfp','intp','isfj','infj','esfj','isfp','esfp','enfj','entp','intj','istj','estj','istp','estp','entj'];

export type TypeInfo = {
  name: string;
  category?: string;
  description?: string;
  traits?: string[];
  strengths?: string[];
  weaknesses?: string[];
  cognitiveFunctions?: { dominant: string; auxiliary: string; tertiary: string; inferior: string };
  workEnvironment?: string[];
  leadershipStyle?: string;
  growthTips?: string[];
  compatibility?: { excellent: string[]; good: string[]; challenging: string[] };
  careers?: string[];
  /** 日本国内推定割合（%） */
  jpPercentage?: number;
  /** 世界推定割合（%） */
  globalPercentage?: number;
  /** 既存互換用。現在は jpPercentage を文字列化したものを設定 */
  percentage?: string;
};

export const typeData: Record<string, TypeInfo> = {
  ENFJ: {
    name: '主人公',
    category: '外交官',
    description: 'カリスマ性があり魅力的なリーダー。対人関係を通じてビジョンを提示し、人を導く力に長けるタイプです。',
    traits: ['共感力が高い', 'リーダーシップ', '理想主義', '人を励ます', '社交的', '洞察力がある'],
    strengths: ['優れたコミュニケーション能力', '他者への深い理解', 'モチベーション向上', '組織力', '説得力のあるプレゼンテーション'],
    weaknesses: ['完璧主義', '批判に敏感', '自己犠牲的', '燃え尽き症候群', '過度に他者を優先する'],
    cognitiveFunctions: {
      dominant: '外向的感情（Fe） - 人間関係の調和を重視し、他者の感情に敏感',
      auxiliary: '内向的直観（Ni） - 将来のビジョンや可能性を洞察',
      tertiary: '外向的感覚（Se） - 現場感覚や環境から情報を取り入れる',
      inferior: '内向的思考（Ti） - 分析的・論理的な裏付けは弱点になりやすい'
    },
    workEnvironment: ['人と関わる機会が多い職場', '価値やミッションに共感できる組織', '意思決定や調整を任されるポジション'],
    leadershipStyle: 'ビジョナリーで人を巻き込みながら導く。フィードバックや承認を通じてチームの力を引き出す。',
    growthTips: ['境界線を設定して自己管理する', '批判を建設的に受け止める訓練をする', 'データや論理的根拠の活用を意識することで説得力が増す'],
    compatibility: { excellent: ['ENFP', 'INTJ', 'ENTP'], good: ['ISFP', 'INFJ', 'ISFJ', 'ISTJ', 'INFP'], challenging: ['ESTJ', 'ESTP', 'ISTP', 'ESFP'] },
    careers: ['教師', 'セールスマネージャー', 'コーチ', 'マネージャー', '政治家', 'ジャーナリスト'],
  jpPercentage: 5.59,
  globalPercentage: 2,
  percentage: '5.59%'
  },
  INTJ: {
    name: '建築家',
    category: '分析家',
    description: '戦略的で洞察力のある独立志向の計画立案者。長期的ビジョンと体系的思考で最適化を追求します。',
    traits: ['戦略志向', '独立心が強い', '改善欲求', '論理的', '内省的', '集中力が高い'],
    strengths: ['長期的な戦略設計', '論理的一貫性', '自己学習能力', '集中して深く掘り下げる力', '客観的意思決定'],
    weaknesses: ['感情面の配慮不足', '完璧主義による遅延', '他者への要求が高い', '対人エネルギー消耗', '柔軟性不足'],
    cognitiveFunctions: {
      dominant: '内向的直観（Ni） - パターンと将来像を統合的に把握する',
      auxiliary: '外向的思考（Te） - 効率と構造化で成果を最大化',
      tertiary: '内向的感情（Fi） - 個人的価値観を内側で精査',
      inferior: '外向的感覚（Se） - 現在の詳細や感覚刺激への即時適応が課題'
    },
    workEnvironment: ['自律性が高い', '長期的課題に集中できる', '論理と成果が評価される', 'ミーティング過多でない'],
    leadershipStyle: '体系化と最適化を重視する静かな戦略リーダー。ゴールから逆算し構造を整える。',
    growthTips: ['80%で出す練習をする', 'フィードバックを早期に取り入れる', '感情的配慮の言語化を意識する'],
    compatibility: { excellent: ['ENFP', 'ENTP', 'INFJ'], good: ['INTP', 'ENTJ', 'ISTJ', 'INFP'], challenging: ['ESFP', 'ESFJ', 'ESTP', 'ISFP'] },
    careers: ['戦略コンサルタント', 'システムアーキテクト', '研究開発', 'プロダクトマネージャー', 'データサイエンティスト', '技術顧問'],
  jpPercentage: 3.69,
  globalPercentage: 2,
  percentage: '3.69%'
  },
  INTP: {
    name: '論理学者',
    category: '分析家',
    description: '概念的探究と原理理解を好む理論構築者。仕組みを抽象化し再設計することに喜びを感じます。',
    traits: ['分析的', '独創的', '知的好奇心旺盛', '柔軟な発想', '抽象志向', '内省的'],
    strengths: ['問題の本質把握', '新しい概念モデル化', '迅速な仮説生成', '専門知識習得', '論理的検証'],
    weaknesses: ['実行・仕上げの遅延', '優先順位の迷走', '他人への説明省略', '日常事務の抜け', '決断の先送り'],
    cognitiveFunctions: {
      dominant: '内向的思考（Ti） - 構造の内部整合性を追求',
      auxiliary: '外向的直観（Ne） - 可能性と関連性を拡散的に探索',
      tertiary: '内向的感情（Fi） - 個人的価値観を静かに熟考',
      inferior: '外向的感覚（Se） - 物理的現実と即時行動への適応が課題'
    },
    workEnvironment: ['静かで集中できる', '知的自由度が高い', '試行錯誤が許容される', '細かい管理が少ない'],
    leadershipStyle: '専門的助言やモデル設計で知的貢献する裏方型。必要以上の指揮は好まない。',
    growthTips: ['完了基準を明確化する', 'アウトプット頻度を増やす', 'タスクを小さく区切る', '説明の前提を共有する'],
    compatibility: { excellent: ['ENTJ', 'ENFJ', 'INFJ'], good: ['INTJ', 'ENFP', 'ENTP', 'INFP'], challenging: ['ESFJ', 'ESTJ', 'ISFJ', 'ESFP'] },
    careers: ['ソフトウェアエンジニア', 'AI研究', 'アルゴリズム開発', 'テクニカルライター', 'データアナリスト', '発明家'],
  jpPercentage: 7.19,
  globalPercentage: 3,
  percentage: '7.19%'
  },
  ENTJ: {
    name: '指揮官',
    category: '分析家',
    description: '目標達成と構造化を推進する大胆な組織ドライバー。非効率を嫌い改善策を迅速に実行します。',
    traits: ['決断力', '成果志向', '論理的整理', '高いエネルギー', 'リーダー気質', '長期視点'],
    strengths: ['迅速な意思決定', '課題の切り分け', 'チームの方向付け', 'プレッシャー耐性', '改善ドライブ'],
    weaknesses: ['感情配慮の不足', '強引さ', '休息軽視', '失敗への苛立ち', '柔らかいフィードバックが苦手'],
    cognitiveFunctions: {
      dominant: '外向的思考（Te） - 効率と成果を最大化する枠組み構築',
      auxiliary: '内向的直観（Ni） - 長期的方向性と抽象パターン洞察',
      tertiary: '外向的感覚（Se） - 現在資源の即時活用',
      inferior: '内向的感情（Fi） - 個人感情と価値観の内省が後回し'
    },
    workEnvironment: ['明確なKPI', '意思決定が早い', '裁量権がある', '挑戦的ターゲットがある'],
    leadershipStyle: 'ゴールドリブンで構造・人材配置を最適化し推進する。数字と結果を重視。',
    growthTips: ['肯定的フィードバックも意識的に伝える', '休息を計画に組み込む', '反対意見を先に要約して受容を示す'],
    compatibility: { excellent: ['INTP', 'INFP', 'ENTP'], good: ['INTJ', 'ENFP', 'ENFJ', 'ISTJ'], challenging: ['ISFP', 'ESFP', 'ISFJ', 'ESFJ'] },
    careers: ['経営コンサル', '事業開発', 'プロダクト統括', '投資ファンド', '営業統括', 'オペレーション責任者'],
  jpPercentage: 2.57,
  globalPercentage: 3,
  percentage: '2.57%'
  },
  ENTP: {
    name: '討論者',
    category: '分析家',
    description: '多角的視点で発想し議論を通じてアイデアを精錬する概念的イノベーター。変化と可能性を好む。',
    traits: ['機知に富む', '即興的', '好奇心旺盛', '柔軟', '議論好き', 'アイデア生成力'],
    strengths: ['発想の幅広さ', '概念連結', 'ピボット対応', '仮説検証スピード', '説得力ある即興説明'],
    weaknesses: ['継続力不足', '細部の詰め残し', '反論癖', '同時進行しすぎ', '締め切り後ろ倒し'],
    cognitiveFunctions: {
      dominant: '外向的直観（Ne） - 可能性と関連性を高速探索',
      auxiliary: '内向的思考（Ti） - 概念整合性と論理検証',
      tertiary: '外向的感情（Fe） - 社会的雰囲気への適応',
      inferior: '内向的感覚（Si） - 過去プロセスの維持継続が課題'
    },
    workEnvironment: ['変化が多い', '新規アイデア歓迎', '階層がフラット', '議論が活発'],
    leadershipStyle: 'ブレストと選択肢提示でチームを刺激する促進型。最終整理は他タイプに委譲しがち。',
    growthTips: ['やらないリストを作る', 'アウトプット優先で形にする', '議論→決定→実行の区切りを明確化'],
    compatibility: { excellent: ['INFJ', 'INTJ', 'ENFJ'], good: ['ENTJ', 'ENFP', 'INTP', 'INFP'], challenging: ['ISFJ', 'ESFJ', 'ISTJ', 'ESTJ'] },
    careers: ['スタートアップ創業', 'プロダクト企画', 'UXリサーチ', '広告クリエイティブ', '事業開発', 'イノベーションコンサル'],
  jpPercentage: 5.18,
  globalPercentage: 3,
  percentage: '5.18%'
  },
  ENFP: {
    name: '広報運動家',
    category: '外交官',
    description: '情熱的で創造的なアイデア触媒。人と可能性を結びつけるエネルギッシュなムードメーカー。',
    traits: ['情熱的', '好奇心旺盛', '共感的', '柔軟', '想像力豊か', '自発的'],
    strengths: ['人を鼓舞する力', '創造的発想', '適応力', '多様な関係構築', '価値観への洞察'],
    weaknesses: ['飽きやすい', 'ルーティンが苦手', '衝動的決断', '締め切り直前型', '過剰な自己分散'],
    cognitiveFunctions: {
      dominant: '外向的直観（Ne） - 可能性と関連性を広げる',
      auxiliary: '内向的感情（Fi） - 内面価値観の整合性を重視',
      tertiary: '外向的思考（Te） - 必要時に外部構造化を行う',
      inferior: '内向的感覚（Si） - 継続手順や細部維持がエネルギーを消耗'
    },
    workEnvironment: ['自由度が高い', '新規企画歓迎', '硬直したルールが少ない', '人との交流が適度にある'],
    leadershipStyle: '鼓舞と共感で方向性を提示するインスピレーション型。',
    growthTips: ['タスクを3つ以内に絞る', '初期熱量時に骨組みを固める', '自分のエネルギー残量を可視化'],
    compatibility: { excellent: ['INFJ', 'INTJ', 'ENFJ'], good: ['INFP', 'ENTP', 'ISFP', 'ENTJ'], challenging: ['ISTJ', 'ESTJ', 'ISFJ', 'ESFJ'] },
    careers: ['クリエイティブディレクター', 'スタートアップ企画', 'コンテンツプランナー', 'ブランドマーケ', 'HR開発', 'イベントプロデューサー'],
  jpPercentage: 13.79,
  globalPercentage: 7,
  percentage: '13.79%'
  },
  INFJ: {
    name: '提唱者',
    category: '外交官',
    description: '静かな情熱と洞察で人や組織の潜在性を引き出す理想志向のカウンセラータイプ。',
    traits: ['洞察力', '共感力', '目的志向', '静かな情熱', '直観的', '構造化志向'],
    strengths: ['深い対人理解', '長期的ビジョン設計', '意味付け能力', '誠実さと一貫性', '内省的分析'],
    weaknesses: ['境界線が薄く疲弊', '批判に傷つきやすい', '完璧主義', '過度な内省', '感情を抱え込みやすい'],
    cognitiveFunctions: {
      dominant: '内向的直観（Ni） - 意味とパターン統合',
      auxiliary: '外向的感情（Fe） - 調和と他者感情への配慮',
      tertiary: '内向的思考（Ti） - 概念整理と体系化',
      inferior: '外向的感覚（Se） - 感覚的現実への即応が負荷'
    },
    workEnvironment: ['価値ミッション共有', '静かで集中可能', '深い一対一対話', '急な方針変更が少ない'],
    leadershipStyle: '静かに方向と意味を示し、人の成長を促すサーブ型。',
    growthTips: ['負荷サインを言語化して共有', '60%完成で外部フィードバック', '身体的休息を計画的に取る'],
    compatibility: { excellent: ['ENFP', 'ENTP', 'INTJ'], good: ['INFP', 'ENFJ', 'INFJ', 'ISFP'], challenging: ['ESTP', 'ESTJ', 'ESFP', 'ISTP'] },
    careers: ['カウンセラー', '教育企画', 'UXリサーチ', '非営利活動', '人材開発', '編集・ライティング'],
  jpPercentage: 6.79,
  globalPercentage: 1,
  percentage: '6.79%'
  },
  ISTJ: {
    name: '管理者',
    category: '番人',
    description: '実務的で誠実、信頼性の高い安定志向の管理調整タイプ。秩序と責任遂行を重視します。',
    traits: ['几帳面', '現実的', '責任感', '秩序重視', '粘り強い', '慎重'],
    strengths: ['信頼性', '手順遵守', 'リスク管理', '品質維持', '長期的安定運用'],
    weaknesses: ['柔軟性の不足', '変化への抵抗', '革新軽視', '感情表現の控えめ', '過度な自己批判'],
    cognitiveFunctions: {
      dominant: '内向的感覚（Si） - 過去の経験と蓄積された標準を参照',
      auxiliary: '外向的思考（Te） - 手順と効率の構造化',
      tertiary: '内向的感情（Fi） - 内面の価値基準を静かに保持',
      inferior: '外向的直観（Ne） - 未知の可能性探索に不安を感じやすい'
    },
    workEnvironment: ['明確な役割', '安定したプロセス', '期待が具体的', '即時変更が少ない'],
    leadershipStyle: '秩序と手順を守り抜き、安定運用で信頼を築く管理型。',
    growthTips: ['段階的な変化採用を試す', '完璧より進捗を重視', '価値観を言語化して共有'],
    compatibility: { excellent: ['ESFP', 'ISFP', 'ESTP'], good: ['ISTP', 'ISFJ', 'ESTJ', 'INFP'], challenging: ['ENFP', 'ENTP', 'INTJ', 'INFJ'] },
    careers: ['品質管理', '経理', '運用マネージャー', '行政事務', 'サプライチェーン', '監査'],
  jpPercentage: 3.57,
  globalPercentage: 13,
  percentage: '3.57%'
  },
  ISFJ: {
    name: '擁護者',
    category: '番人',
    description: '思いやりと実務力を兼ね備えた支援型の守り手。細部配慮と安定支援で周囲を支えます。',
    traits: ['献身的', '丁寧', '協調的', '粘り強い', '実務的', '記憶力が良い'],
    strengths: ['細部の気配り', '継続的サポート', '安定運営', '信頼構築', '現実的判断'],
    weaknesses: ['自己主張不足', '過剰な自己犠牲', '変更へのストレス', '批判を内面化', '優先順位の後回し'],
    cognitiveFunctions: {
      dominant: '内向的感覚（Si） - 安定した参照枠と過去経験保存',
      auxiliary: '外向的感情（Fe） - 他者のニーズと調和重視',
      tertiary: '内向的思考（Ti） - 背後の構造理解',
      inferior: '外向的直観（Ne） - 不確定な変化が負荷'
    },
    workEnvironment: ['調和的', '明確な期待', 'サポートが評価される', '急激変化が少ない'],
    leadershipStyle: '静かに支援と安定性を提供し、調整力で成果を引き出す。',
    growthTips: ['境界線を明示する', '「今はできない」と言う練習', '自分の成果を可視化する'],
    compatibility: { excellent: ['ESFP', 'ESTP', 'ENFP'], good: ['ISFP', 'ESFJ', 'ISTJ', 'INFP'], challenging: ['ENTP', 'INTP', 'INTJ', 'ENTJ'] },
    careers: ['医療事務', '看護補助', '教育支援', 'カスタマーサクセス', '人事サポート', '文書管理'],
  jpPercentage: 6.81,
  globalPercentage: 13,
  percentage: '6.81%'
  },
  ESTJ: {
    name: '幹部',
    category: '番人',
    description: '組織化と実行推進に長けた現場指揮タイプ。手順整備と責任遂行を重視し結果を出します。',
    traits: ['実行力', '組織力', '明確な主張', '責任感', '構造化', '現実志向'],
    strengths: ['現場統率', '判断スピード', 'プロセス整備', '継続的改善', 'プレッシャー耐性'],
    weaknesses: ['柔軟性の欠如', '感情配慮不足', '権限委譲の遅れ', '拙速な判断', '他者の内面軽視'],
    cognitiveFunctions: {
      dominant: '外向的思考（Te） - 効率と成果重視で構造化',
      auxiliary: '内向的感覚（Si） - 実績と標準手続の参照',
      tertiary: '外向的直観（Ne） - 必要時に代替策探索',
      inferior: '内向的感情（Fi） - 個人感情の扱いが不得意'
    },
    workEnvironment: ['明確なKPI', '指揮系統が整理', '迅速決定', '役割責任がはっきり'],
    leadershipStyle: '結果重視で役割を明確化し達成を管理する実務統率型。',
    growthTips: ['共感的フィードバックを練習', '権限委譲リストを作る', '急がず一呼吸置く習慣'],
    compatibility: { excellent: ['ISFP', 'INFP', 'ESFP'], good: ['ISTJ', 'ESTP', 'ENTJ', 'ENFJ'], challenging: ['INTP', 'ENFP', 'INFJ', 'INTJ'] },
    careers: ['オペレーション管理', 'プロジェクトマネージャー', '公共行政', '営業統括', '物流管理', '店舗統括'],
  jpPercentage: 3.38,
  globalPercentage: 11,
  percentage: '3.38%'
  },
  ESFJ: {
    name: '領事',
    category: '番人',
    description: '社交的調整と支援を得意とする共同体オーガナイザー。人間関係の維持と実務遂行の橋渡しを行います。',
    traits: ['社交的', '協調的', '配慮深い', '実務的', '秩序志向', '支持的'],
    strengths: ['場の雰囲気調整', '信頼構築', '具体的支援', '継続的実行', '人材ケア'],
    weaknesses: ['外部承認依存', '衝突回避し過ぎ', '過度な自己犠牲', '批判への敏感さ', '境界管理の難しさ'],
    cognitiveFunctions: {
      dominant: '外向的感情（Fe） - 調和と集団規範を重視',
      auxiliary: '内向的感覚（Si） - 過去の成功パターン参照',
      tertiary: '外向的直観（Ne） - 代替案を発想',
      inferior: '内向的思考（Ti） - 論理的分解が疲労要因'
    },
    workEnvironment: ['人と接する機会が多い', '役割が明確', '感謝が可視化される', '安定的リズム'],
    leadershipStyle: '調整・支援・承認を循環させチーム士気を維持する関係駆動型。',
    growthTips: ['断る練習をする', '内省時間を確保', '批判を事実と感情に分割して整理'],
    compatibility: { excellent: ['ISFP', 'ISTP', 'INFP'], good: ['ESFP', 'ISTJ', 'ENFJ', 'ISFJ'], challenging: ['INTP', 'ENTP', 'INTJ', 'ENTJ'] },
    careers: ['人事', 'カスタマーサクセス', 'イベント運営', '教育支援', '医療調整', 'コミュニティマネージャー'],
  jpPercentage: 6.75,
  globalPercentage: 12,
  percentage: '6.75%'
  },
  ISTP: {
    name: '巨匠',
    category: '探検家',
    description: '分析と実践を組み合わせ課題を静かに解体・最適化する適応型トラブルシューター。',
    traits: ['冷静', '実験的', '実践志向', '観察力', '柔軟', '技術好奇心'],
    strengths: ['問題の分解', 'リアルタイム適応', '危機下での冷静さ', 'ツール活用', 'コスト効率判断'],
    weaknesses: ['長期計画の軽視', '感情共有の少なさ', '継続的管理が苦手', '一貫性不足', '興味偏重'],
    cognitiveFunctions: {
      dominant: '内向的思考（Ti） - 構造と仕組みの論理整合性',
      auxiliary: '外向的感覚（Se） - 瞬間的な感覚情報処理',
      tertiary: '内向的直観（Ni） - 断片的洞察の補強',
      inferior: '外向的感情（Fe） - 感情的配慮と共感表現が課題'
    },
    workEnvironment: ['裁量のある現場', '実装・検証サイクル', '過度な会議が少ない', '目に見える成果'],
    leadershipStyle: '必要時に技術的判断で支える実務支援型。常時指揮は好まない。',
    growthTips: ['完了通知を明示する癖付け', '小さなルーチン自動化', '感情面フィードバックを一言添える'],
    compatibility: { excellent: ['ESFJ', 'ENFJ', 'ISFJ'], good: ['ISTJ', 'ESTP', 'ISFP', 'ESTJ'], challenging: ['INFJ', 'ENFP', 'INTJ', 'ENTJ'] },
    careers: ['フィールドエンジニア', 'インフラ運用', 'メカ設計', 'セキュリティ分析', 'リペアスペシャリスト', 'QAエンジニア'],
  jpPercentage: 2.87,
  globalPercentage: 5,
  percentage: '2.87%'
  },
  ISFP: {
    name: '冒険家',
    category: '探検家',
    description: '静かな感受性と感覚的創造性を持つ柔軟な表現者。美意識と調和を大切にします。',
    traits: ['繊細', '柔軟', '審美眼', '控えめな情熱', '自由志向', '観察力'],
    strengths: ['状況緩和', '感覚的表現', '適応力', '他者受容', '過剰反応しない落ち着き'],
    weaknesses: ['将来計画の甘さ', '自己主張不足', '意思決定の遅さ', '不快回避で先送り', '継続管理が苦手'],
    cognitiveFunctions: {
      dominant: '内向的感情（Fi） - 個人価値観の内的整合性',
      auxiliary: '外向的感覚（Se） - 感覚的体験への没入',
      tertiary: '内向的直観（Ni） - 背後の意味の断続的洞察',
      inferior: '外向的思考（Te） - 外部構造化と効率管理が負荷'
    },
    workEnvironment: ['過度に競争的でない', '創造性を尊重', '静かな作業時間', '価値観が尊重される'],
    leadershipStyle: '直接統率より空気を和らげ支援する静かな調整型。',
    growthTips: ['小さな締め切りを設定', 'YES/NOをはっきり伝える練習', '価値観と優先順位を紙に書き出す'],
    compatibility: { excellent: ['ENFJ', 'ESFJ', 'ESTJ'], good: ['ISFJ', 'ISTJ', 'INFP', 'ENFP'], challenging: ['ENTP', 'ENTJ', 'INTP', 'INTJ'] },
    careers: ['デザイナー', 'クラフト制作', '写真・映像', '理学療法', '介護支援', 'フードクリエイター'],
  jpPercentage: 6.74,
  globalPercentage: 8,
  percentage: '6.74%'
  },
  ESTP: {
    name: '起業家',
    category: '探検家',
    description: '瞬発力と観察力で動的状況を裁くリアルタイム問題解決者。行動と経験を通じて学びます。',
    traits: ['エネルギッシュ', '大胆', '現実的', '社交的', '即応力', '機会探索'],
    strengths: ['即時判断', '危機対応', '交渉巧者', 'ネットワーク構築', '資源活用'],
    weaknesses: ['長期計画軽視', '衝動的', '一貫性不足', '細部フォロー漏れ', 'リスク過小評価'],
    cognitiveFunctions: {
      dominant: '外向的感覚（Se） - 現在の刺激と機会を捉える',
      auxiliary: '内向的思考（Ti） - 迅速な論理検証',
      tertiary: '外向的感情（Fe） - 社会的ダイナミクス調整',
      inferior: '内向的直観（Ni） - 長期含意の読み解きが後手'
    },
    workEnvironment: ['変化が早い', '即断即決', 'インセンティブが明確', '対人交流が多い'],
    leadershipStyle: '現場で先頭に立ちスピードで牽引する実行触媒型。',
    growthTips: ['リスク評価テンプレ使用', '反射でYESしないで10秒置く', 'フォロータスクを翌朝ブロック'],
    compatibility: { excellent: ['ISFJ', 'ISTJ', 'ESFJ'], good: ['ESTJ', 'ENTP', 'ENFP', 'ISTP'], challenging: ['INFJ', 'INFP', 'INTJ', 'INTP'] },
    careers: ['営業', 'イベント運営', 'トレーダー', '危機対応職', 'ビジネス開発', 'スポーツ関連'],
  jpPercentage: 2.62,
  globalPercentage: 4,
  percentage: '2.62%'
  },
  ESFP: {
    name: 'エンターテイナー',
    category: '探検家',
    description: '社交的エネルギーと感覚的魅力で場を活性化する表現力豊かな体験共有者。',
    traits: ['明るい', '外向的', '柔軟', '感覚鋭い', '人中心', '楽観的'],
    strengths: ['場の活性化', '空気読解', '即時適応', '協力促進', '顧客体験向上'],
    weaknesses: ['計画継続の難しさ', '衝動買い', '退屈への耐性低い', '長期視点不足', '詳細管理苦手'],
    cognitiveFunctions: {
      dominant: '外向的感覚（Se） - 感覚刺激と機会を享受',
      auxiliary: '内向的感情（Fi） - 個人価値観と感受性',
      tertiary: '外向的思考（Te） - 必要時に成果構造化',
      inferior: '内向的直観（Ni） - 長期的方向付けが後回し'
    },
    workEnvironment: ['人と関わる', '動きがある', '成果が即時フィードバック', '自由度あり'],
    leadershipStyle: 'モチベーションと雰囲気づくりで牽引する感情ドライブ型。',
    growthTips: ['カレンダーにルーチン固定', '支出ログを週次で見る', '翌日の最重要3件を寝る前に書く'],
    compatibility: { excellent: ['ISTJ', 'ISFJ', 'ESTJ'], good: ['ESFJ', 'ENFJ', 'ISFP', 'ESTP'], challenging: ['INTP', 'INTJ', 'INFJ', 'ENTJ'] },
    careers: ['ホスピタリティ', '販売プロモーション', 'パフォーマー', '観光・旅行', '美容・スタイリスト', 'イベントMC'],
  jpPercentage: 6.01,
  globalPercentage: 7,
  percentage: '6.01%'
  },
  INFP: {
    name: '仲介者',
    category: '外交官',
    description: '詩的で親切な利他主義者',
    traits: ['創造性豊か', '理想主義', '価値観重視', '独立性'],
    strengths: ['深い共感力', '創造的思考', '柔軟性', '誠実さ'],
    weaknesses: ['批判に敏感', '現実逃避傾向', '完璧主義', '決断力不足'],
    compatibility: { excellent: ['ENFJ', 'ENTJ', 'ENFP', 'INTJ'], good: ['INFJ', 'ISFJ', 'ESFJ', 'ENTP'], challenging: ['ESTJ', 'ESFP', 'ESTP', 'ISTJ'] },
    careers: ['作家', 'アーティスト', 'カウンセラー', '心理学者', 'ソーシャルワーカー'],
  jpPercentage: 16.44,
  globalPercentage: 4,
  percentage: '16.44%'
  }
};
