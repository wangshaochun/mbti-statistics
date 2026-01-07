// タイプ比較データ
export type TypeComparison = {
  type1: string;
  type2: string;
  slug: string;
  summary: string;
  keyDifferences: Array<{
    aspect: string;
    type1Trait: string;
    type2Trait: string;
  }>;
  cognitiveFunctions: {
    type1Stack: string[];
    type2Stack: string[];
    analysis: string;
  };
  careerDifferences: {
    type1Careers: string[];
    type2Careers: string[];
    overlap: string[];
    explanation: string;
  };
  relationshipStyle: {
    type1Style: string;
    type2Style: string;
    comparison: string;
  };
  commonMisconceptions: string[];
  howToDistinguish: Array<{
    question: string;
    type1Answer: string;
    type2Answer: string;
  }>;
};

export const comparisonDatabase: Record<string, TypeComparison> = {
  'infp-infj': {
    type1: 'INFP',
    type2: 'INFJ',
    slug: 'infp-infj',
    summary: 'INFPとINFJは共に内向的で直観的、感情的な判断を重視するため、一見似ていますが、認知機能の違いにより、情報処理と意思決定のアプローチが大きく異なります。',
    keyDifferences: [
      {
        aspect: '主機能',
        type1Trait: 'Fi（内向的感情）- 内なる価値観を基準に判断',
        type2Trait: 'Ni（内向的直観）- 深い洞察とビジョンを優先'
      },
      {
        aspect: '意思決定',
        type1Trait: '個人の価値観と真正性を最優先',
        type2Trait: '全体的なビジョンと調和を重視'
      },
      {
        aspect: '計画性',
        type1Trait: '柔軟で流動的（P型）、締め切りギリギリまで可能性を探る',
        type2Trait: '計画的で構造的（J型）、事前に決定し安心を得る'
      },
      {
        aspect: '表現',
        type1Trait: '内面の感情は深いが表出は控えめ、芸術で表現',
        type2Trait: '他者への配慮を表現し、調和を積極的に作る'
      },
      {
        aspect: '理想の追求',
        type1Trait: '個人の真正性と自己表現を通じた理想',
        type2Trait: '社会的な影響と人々の成長を通じた理想'
      }
    ],
    cognitiveFunctions: {
      type1Stack: ['Fi（内向的感情）', 'Ne（外向的直観）', 'Si（内向的感覚）', 'Te（外向的思考）'],
      type2Stack: ['Ni（内向的直観）', 'Fe（外向的感情）', 'Ti（内向的思考）', 'Se（外向的感覚）'],
      analysis: 'INFPはFi-Neで個人の価値観を基に多様な可能性を探求します。INFJはNi-Feで統一的なビジョンを描き、それを他者との調和の中で実現します。この違いにより、INFPは「個人の真正性」を、INFJは「集団の調和と成長」を優先します。'
    },
    careerDifferences: {
      type1Careers: ['作家', 'カウンセラー', 'アーティスト', 'ライター', 'ソーシャルワーカー'],
      type2Careers: ['心理カウンセラー', '教師', 'コーチ', '組織開発コンサルタント', 'HRマネージャー'],
      overlap: ['カウンセリング', '教育', '執筆', 'クリエイティブ分野'],
      explanation: 'INFPは個人の自己表現と真正性を活かせる創造的な仕事を好みます。INFJは人々の成長をサポートし、組織やコミュニティに長期的な影響を与える役割を求めます。'
    },
    relationshipStyle: {
      type1Style: '深い感情的つながりを求めるが、独立性と個人空間も重視。パートナーの真正性と価値観の一致を重要視。',
      type2Style: '深い精神的つながりと相互理解を求める。パートナーの成長をサポートし、長期的なビジョンを共有したい。',
      comparison: '両タイプとも深い関係を求めますが、INFPは「ありのままの自分でいられるか」を、INFJは「共に成長できるか」を重視します。'
    },
    commonMisconceptions: [
      'どちらも理想主義者だが、INFPは個人の価値観に基づく理想、INFJは社会的影響を含む理想を追求',
      'INFPは感情的に見えるが内面的、INFJは冷静に見えるが他者の感情に敏感',
      'どちらも内向的だが、INFJの方がFe（外向的感情）により社交的な場面で適応しやすい',
      'INFPは優柔不断に見えるが可能性を探っている、INFJは決断が早いが後から疑念を持つことも'
    ],
    howToDistinguish: [
      {
        question: '締め切りや計画について、どのように感じますか？',
        type1Answer: 'INFP: 締め切りはプレッシャーだが、ギリギリまで可能性を探りたい。計画は柔軟に変更できる方が良い。',
        type2Answer: 'INFJ: 事前に計画を立て、締め切りより早めに完了すると安心。予定外の変更はストレス。'
      },
      {
        question: '価値観や意思決定の基準は何ですか？',
        type1Answer: 'INFP: 自分の内なる価値観と真正性。「これは自分にとって正しいか？本当の自分でいられるか？」',
        type2Answer: 'INFJ: 全体的なビジョンと調和。「これは長期的に人々に良い影響を与えるか？」'
      },
      {
        question: '他者との関わり方は？',
        type1Answer: 'INFP: 深い一対一の関係を好む。グループでは観察者になりがち。自分の感情は内に秘める。',
        type2Answer: 'INFJ: 他者の感情を察知し配慮する。グループの調和を作ろうとする。他者の成長を支援したい。'
      },
      {
        question: '情報処理のスタイルは？',
        type1Answer: 'INFP: 複数の可能性を同時に考える（Ne）。「もしかしたら...」と想像を広げる。',
        type2Answer: 'INFJ: 一つの深いビジョンに収束する（Ni）。「これはこうなるだろう」と直感的に理解する。'
      }
    ]
  },
  
  'intj-entj': {
    type1: 'INTJ',
    type2: 'ENTJ',
    slug: 'intj-entj',
    summary: 'INTJとENTJは共に直観的思考型で、戦略的かつ論理的ですが、エネルギーの方向性（内向/外向）の違いにより、リーダーシップスタイルと実行アプローチが異なります。',
    keyDifferences: [
      {
        aspect: 'エネルギー源',
        type1Trait: '内向型（I）- 一人で考える時間で充電、独立した作業を好む',
        type2Trait: '外向型（E）- 人との交流で充電、チームを率いることで活力を得る'
      },
      {
        aspect: 'リーダーシップ',
        type1Trait: '裏方の戦略家、専門家として影響力を発揮',
        type2Trait: '前面に立つリーダー、組織全体を統率'
      },
      {
        aspect: '意思決定',
        type1Trait: 'じっくり分析してから決定（Ni優先）',
        type2Trait: '素早く決断し実行に移す（Te優先）'
      },
      {
        aspect: 'コミュニケーション',
        type1Trait: '必要最小限、深い議論を好む',
        type2Trait: '積極的、幅広いネットワーク構築'
      },
      {
        aspect: '焦点',
        type1Trait: 'ビジョンと長期戦略（Ni-Te）',
        type2Trait: '実行と結果（Te-Ni）'
      }
    ],
    cognitiveFunctions: {
      type1Stack: ['Ni（内向的直観）', 'Te（外向的思考）', 'Fi（内向的感情）', 'Se（外向的感覚）'],
      type2Stack: ['Te（外向的思考）', 'Ni（内向的直観）', 'Se（外向的感覚）', 'Fi（内向的感情）'],
      analysis: 'INTJはNi-Teで深い洞察から戦略を立て、論理的に実行します。ENTJはTe-Niで効率的な実行を優先し、それを支えるビジョンを持ちます。この機能の順序の違いが、アプローチの違いを生みます。'
    },
    careerDifferences: {
      type1Careers: ['戦略コンサルタント', 'システムアーキテクト', '研究者', '投資アナリスト', '専門家'],
      type2Careers: ['CEO', '経営幹部', 'プロジェクトマネージャー', '起業家', '政治家'],
      overlap: ['経営コンサルティング', '戦略立案', 'IT管理職', 'ビジネス開発'],
      explanation: 'INTJは専門知識と独自のビジョンを活かす役割を好みます。ENTJは組織を率い、大規模な実行を推進する役割を求めます。'
    },
    relationshipStyle: {
      type1Style: '少数の深い関係を好む。パートナーの独立性を尊重し、知的な刺激を求める。',
      type2Style: '社交的で幅広い人脈を持つ。パートナーと共に目標を達成したい。',
      comparison: '両タイプとも効率と論理を重視しますが、INTJは静かな深さを、ENTJは活動的なリーダーシップを関係に持ち込みます。'
    },
    commonMisconceptions: [
      'どちらも戦略的だが、INTJはビジョンから、ENTJは実行から入る',
      'INTJは内向的だが、意見は明確。ENTJは外向的で、積極的に影響を与える',
      'どちらも感情表現は少ないが、INTJはFi（内向的感情）で深い価値観を持ち、ENTJは効率を優先',
      'INTJは完璧主義、ENTJは結果主義'
    ],
    howToDistinguish: [
      {
        question: 'リーダーシップの役割について、どう感じますか？',
        type1Answer: 'INTJ: 必要なら引き受けるが、専門家として裏方で貢献したい。大勢の前に立つのは好まない。',
        type2Answer: 'ENTJ: 自然に前に出てリーダーシップを取る。組織を率いることにやりがいを感じる。'
      },
      {
        question: '意思決定のプロセスは？',
        type1Answer: 'INTJ: じっくり分析し、全体像を理解してから決定。急かされるのは苦手。',
        type2Answer: 'ENTJ: 素早く決断し、すぐに実行に移す。分析よりも行動を優先。'
      },
      {
        question: 'エネルギーの充電方法は？',
        type1Answer: 'INTJ: 一人の時間で読書や思考に没頭。社交活動は疲れる。',
        type2Answer: 'ENTJ: 人と会い、議論し、プロジェクトを推進することで活力を得る。'
      },
      {
        question: 'チームでの役割は？',
        type1Answer: 'INTJ: 戦略立案や問題解決の専門家として貢献。独立して作業したい。',
        type2Answer: 'ENTJ: チームリーダーとして全体を統率し、メンバーを動機づける。'
      }
    ]
  },

  'enfp-enfj': {
    type1: 'ENFP',
    type2: 'ENFJ',
    slug: 'enfp-enfj',
    summary: 'ENFPとENFJは共に外向的で直観的、人々との関わりを重視しますが、判断基準（感情vs知覚）の違いにより、アプローチと優先順位が異なります。',
    keyDifferences: [
      {
        aspect: '主機能',
        type1Trait: 'Ne（外向的直観）- 可能性の探求を優先',
        type2Trait: 'Fe（外向的感情）- 調和と人々のニーズを優先'
      },
      {
        aspect: '計画性',
        type1Trait: '柔軟で自発的（P型）、変化を楽しむ',
        type2Trait: '計画的で組織的（J型）、構造を好む'
      },
      {
        aspect: '焦点',
        type1Trait: 'アイデアと可能性、「こんなこともできる！」',
        type2Trait: '人々の成長と調和、「みんなが幸せに」'
      },
      {
        aspect: '意思決定',
        type1Trait: '個人の価値観（Fi）に基づく',
        type2Trait: 'グループの調和（Fe）を考慮'
      },
      {
        aspect: '実行',
        type1Trait: '衝動的、複数のプロジェクトに興味',
        type2Trait: '計画的、一貫した実行を重視'
      }
    ],
    cognitiveFunctions: {
      type1Stack: ['Ne（外向的直観）', 'Fi（内向的感情）', 'Te（外向的思考）', 'Si（内向的感覚）'],
      type2Stack: ['Fe（外向的感情）', 'Ni（内向的直観）', 'Se（外向的感覚）', 'Ti（内向的思考）'],
      analysis: 'ENFPはNe-Fiで新しい可能性を探求し、個人の価値観で判断します。ENFJはFe-Niで人々の調和を優先し、長期的なビジョンで導きます。この違いにより、ENFPは「探検家」、ENFJは「導き手」となります。'
    },
    careerDifferences: {
      type1Careers: ['マーケター', 'クリエイター', 'イノベーター', 'ジャーナリスト', 'コンサルタント'],
      type2Careers: ['教師', 'コーチ', 'HR専門家', 'NPOリーダー', 'カウンセラー'],
      overlap: ['コミュニケーション職', 'クリエイティブ分野', 'コーチング', 'チームビルディング'],
      explanation: 'ENFPは創造性と新しいアイデアを活かす役割を好みます。ENFJは人々の成長をサポートし、組織の調和を作る役割を求めます。'
    },
    relationshipStyle: {
      type1Style: '情熱的で自発的。パートナーと共に新しい経験を楽しみたい。独立性も重視。',
      type2Style: '献身的で supportive。パートナーの成長を支援し、調和のある関係を作りたい。',
      comparison: '両タイプとも温かく感情的ですが、ENFPは自由な探求を、ENFJは安定した成長を関係に求めます。'
    },
    commonMisconceptions: [
      'どちらも社交的だが、ENFPは好奇心で、ENFJは人々への配慮で人と関わる',
      'ENFPは自由奔放に見えるが深い価値観を持つ。ENFJは計画的で責任感が強い',
      'どちらも理想主義者だが、ENFPは可能性を、ENFJは人々の成長を追求',
      'ENFPは多趣味で焦点が散漫。ENFJは一貫した目標に向かって進む'
    ],
    howToDistinguish: [
      {
        question: '計画と締め切りについて、どう感じますか？',
        type1Answer: 'ENFP: 柔軟な方が良い。計画は変更可能で、新しいアイデアに対応したい。',
        type2Answer: 'ENFJ: 事前の計画が安心。締め切りを守り、責任を果たしたい。'
      },
      {
        question: '意思決定の基準は？',
        type1Answer: 'ENFP: 自分の価値観と直感。「これは自分にとって意味があるか？」',
        type2Answer: 'ENFJ: グループの調和と人々への影響。「これはみんなにとって良いか？」'
      },
      {
        question: 'グループでの役割は？',
        type1Answer: 'ENFP: アイデアを出し、雰囲気を盛り上げる。新しい視点を提供。',
        type2Answer: 'ENFJ: グループをまとめ、全員が参加できる環境を作る。リーダーシップを取る。'
      },
      {
        question: '焦点の当て方は？',
        type1Answer: 'ENFP: 複数のプロジェクトや興味を同時に追求。可能性を広げたい。',
        type2Answer: 'ENFJ: 一貫した目標に向かって計画的に進む。人々の成長を支援したい。'
      }
    ]
  },

  'istj-isfj': {
    type1: 'ISTJ',
    type2: 'ISFJ',
    slug: 'istj-isfj',
    summary: 'ISTJとISFJは共に内向的で感覚的、責任感が強いですが、判断基準（思考vs感情）の違いにより、意思決定のアプローチと優先順位が異なります。',
    keyDifferences: [
      {
        aspect: '判断基準',
        type1Trait: 'Te（外向的思考）- 論理と効率を優先',
        type2Trait: 'Fe（外向的感情）- 調和と人々の気持ちを優先'
      },
      {
        aspect: '意思決定',
        type1Trait: '客観的な事実とルールに基づく',
        type2Trait: '人への影響と感情的配慮を重視'
      },
      {
        aspect: 'コミュニケーション',
        type1Trait: '直接的で事実重視、必要なことを伝える',
        type2Trait: '温かく配慮的、相手の気持ちを考慮'
      },
      {
        aspect: '対立への対応',
        type1Trait: '論理的に議論し解決を求める',
        type2Trait: '対立を避け、調和を保とうとする'
      },
      {
        aspect: '仕事の焦点',
        type1Trait: 'タスクの完了と効率',
        type2Trait: '人々のサポートと協力'
      }
    ],
    cognitiveFunctions: {
      type1Stack: ['Si（内向的感覚）', 'Te（外向的思考）', 'Fi（内向的感情）', 'Ne（外向的直観）'],
      type2Stack: ['Si（内向的感覚）', 'Fe（外向的感情）', 'Ti（内向的思考）', 'Ne（外向的直観）'],
      analysis: 'どちらもSi主機能で過去の経験と確立された方法を重視しますが、ISTJはTe（論理・効率）で、ISFJはFe（調和・配慮）で判断します。この違いが、同じ状況でも異なる対応を生みます。'
    },
    careerDifferences: {
      type1Careers: ['会計士', 'エンジニア', '監査役', 'プロジェクトマネージャー', '法律専門家'],
      type2Careers: ['看護師', '教師', '事務職', 'カスタマーサービス', '人事担当'],
      overlap: ['管理職', '品質管理', '組織運営', '伝統的な職業'],
      explanation: 'ISTJは論理とシステムを重視する役割を好みます。ISFJは人々をサポートし、調和を作る役割を求めます。'
    },
    relationshipStyle: {
      type1Style: '誠実で責任感が強い。実用的なサポートで愛情を示す。感情表現は控えめ。',
      type2Style: '献身的で温かい。相手のニーズに敏感で、細やかな配慮を示す。',
      comparison: '両タイプとも忠実で安定を求めますが、ISTJは実務的に、ISFJは感情的にサポートします。'
    },
    commonMisconceptions: [
      'どちらも責任感が強いが、ISTJはルールを、ISFJは人々を優先',
      'ISTJは冷たく見えるが誠実。ISFJは温かく、他者を気遣う',
      'どちらも伝統的だが、ISTJは効率を、ISFJは調和を重視',
      'ISTJは厳格、ISFJは柔軟（人への配慮から）'
    ],
    howToDistinguish: [
      {
        question: '対立や問題に直面した時、どう対応しますか？',
        type1Answer: 'ISTJ: 事実とルールに基づいて論理的に議論し、解決策を見つける。',
        type2Answer: 'ISFJ: 対立を避け、妥協や調和を優先。相手の気持ちを傷つけたくない。'
      },
      {
        question: '意思決定の基準は？',
        type1Answer: 'ISTJ: 論理、効率、既存のルール。「これが最も合理的か？」',
        type2Answer: 'ISFJ: 人への影響、感情的配慮。「これは相手を傷つけないか？」'
      },
      {
        question: 'チームでの役割は？',
        type1Answer: 'ISTJ: タスクを効率的に完了し、品質を保証。ルールの遵守を重視。',
        type2Answer: 'ISFJ: チームメンバーをサポートし、調和のある環境を作る。'
      },
      {
        question: 'フィードバックの仕方は？',
        type1Answer: 'ISTJ: 直接的で事実ベース。改善点を明確に指摘。',
        type2Answer: 'ISFJ: 優しく配慮的。相手の気持ちを傷つけないように伝える。'
      }
    ]
  },
  'intp-intj': {
    type1: 'INTP',
    type2: 'INTJ',
    slug: 'intp-intj',
    summary: 'INTPとINTJは共に知的好奇心が旺盛で論理的な「建築家」タイプですが、INTPはプロセスの理解と柔軟な探求を好み、INTJは結果の達成と効率的な実行を重視します。',
    keyDifferences: [
      {
        aspect: '思考のアプローチ',
        type1Trait: 'Ti（内向的思考）- 正確な定義と内部論理の整合性を追求',
        type2Trait: 'Te（外向的思考）- 実用的な効果と外部システムの効率化を追求'
      },
      {
        aspect: '情報処理',
        type1Trait: 'Ne（外向的直観）- 発散的。あらゆる可能性を考慮し、選択肢を残す',
        type2Trait: 'Ni（内向的直観）- 収束的。最善の結論を絞り込み、ゴールへ向かう'
      },
      {
        aspect: '計画性',
        type1Trait: 'P型 - 柔軟で即興的。予期せぬ発見を楽しむ',
        type2Trait: 'J型 - 計画的で断定的。不確実性を減らし管理したい'
      },
      {
        aspect: 'コミュニケーション',
        type1Trait: '詳細で正確だが、結論が出るまで時間がかかることがある',
        type2Trait: '簡潔で結論重視。目的のない会話を嫌う傾向'
      }
    ],
    cognitiveFunctions: {
      type1Stack: ['Ti（内向的思考）', 'Ne（外向的直観）', 'Si（内向的感覚）', 'Fe（外向的感情）'],
      type2Stack: ['Ni（内向的直観）', 'Te（外向的思考）', 'Fi（内向的感情）', 'Se（外向的感覚）'],
      analysis: 'INTPはTi-Neで「なぜそうなるのか」という仕組みの理解と可能性の探求を重視します。INTJはNi-Teで「どうすれば実現できるか」というビジョンの構築と実行を重視します。'
    },
    careerDifferences: {
      type1Careers: ['研究者', 'プログラマー', '哲学者', '教授', 'システムアナリスト'],
      type2Careers: ['経営戦略家', 'プロジェクトマネージャー', 'システムアーキテクト', '起業家', 'コンサルタント'],
      overlap: ['エンジニア', '科学者', 'アナリスト', '技術職'],
      explanation: 'INTPは純粋な知的好奇心を満たせる、締め切りの少ない研究的な環境を好みます。INTJはビジョンを形にし、システムを構築・改善できる、影響力のある役割を好みます。'
    },
    relationshipStyle: {
      type1Style: '自立性を尊重し、知的な刺激を求める。感情表現は苦手で、パートナーにも論理を求める。',
      type2Style: '長期的なコミットメントを重視。パートナーとの成長と、目標共有を求める。',
      comparison: 'INTPは「興味深い議論」を、INTJは「建設的な関係」を求めます。'
    },
    commonMisconceptions: [
      'どちらも頭が良いが、INTPは学者肌、INTJは参謀肌',
      'INTPは優柔不断に見えるが、情報を集めている。INTJは頑固に見えるが、ビジョンがある',
      'INTPは細かい定義にこだわる、INTJは大枠の構造にこだわる'
    ],
    howToDistinguish: [
      {
        question: '問題を解決する際、どうアプローチしますか？',
        type1Answer: 'INTP: 根本的な原理を理解し、あらゆる角度から分析する。解決策の実用性より理論的な正しさを優先することも。',
        type2Answer: 'INTJ: 最も効率的で効果的な解決策を特定し、実行計画を立てる。使えない理論には興味がない。'
      },
      {
        question: '新しい情報が入った時の反応は？',
        type1Answer: 'INTP: 「面白い！これまでの理論を修正できるかも」と歓迎し、再考する。',
        type2Answer: 'INTJ: 「計画の邪魔になる」と感じるか、目標達成に役立つか即座に判断する。'
      }
    ]
  },
  'isfp-infp': {
    type1: 'ISFP',
    type2: 'INFP',
    slug: 'isfp-infp',
    summary: 'ISFPとINFPは共に内向的感情（Fi）を主機能に持つため、個人の価値観と真正性を大切にしますが、ISFPは現実世界での感覚的な体験を、INFPは理想世界での意味や可能性を重視します。',
    keyDifferences: [
      {
        aspect: '認識の焦点',
        type1Trait: 'Se（外向的感覚）- 「今ここ」の体験、美、具体的な行動',
        type2Trait: 'Ne（外向的直観）- 将来の可能性、意味、抽象的なアイデア'
      },
      {
        aspect: '表現方法',
        type1Trait: '視覚的・物理的な表現（ファッション、アート、行動）',
        type2Trait: '言語的・概念的な表現（詩、物語、比喩）'
      },
      {
        aspect: '興味の対象',
        type1Trait: '具体的な体験、自然、動物、職人技',
        type2Trait: '人間の心理、哲学、社会問題、ファンタジー'
      },
      {
        aspect: '行動スタイル',
        type1Trait: '実践的で適応力が高い。まずはやってみる',
        type2Trait: '夢想的で理想を追う。行動する前に深く考える'
      }
    ],
    cognitiveFunctions: {
      type1Stack: ['Fi（内向的感情）', 'Se（外向的感覚）', 'Ni（内向的直観）', 'Te（外向的思考）'],
      type2Stack: ['Fi（内向的感情）', 'Ne（外向的直観）', 'Si（内向的感覚）', 'Te（外向的思考）'],
      analysis: '両者ともFiで「自分らしさ」を大切にしますが、ISFPはSeを使って五感で世界を味わい表現します。INFPはNeを使って心の中で世界を広げ、意味を探求します。'
    },
    careerDifferences: {
      type1Careers: ['ファッションデザイナー', 'シェフ', '獣医', '職人', 'インテリアコーディネーター'],
      type2Careers: ['作家', '心理カウンセラー', '編集者', '人権活動家', '哲学者'],
      overlap: ['アーティスト', '音楽家', '癒しに関わる仕事', 'クリエイティブ職'],
      explanation: 'ISFPは具体的で美的なセンスを活かせる実践的な仕事を好みます。INFPは言葉や概念を扱い、人の心に触れる仕事を好みます。'
    },
    relationshipStyle: {
      type1Style: '言葉より行動やプレゼントで愛情を示す。一緒に楽しい時間を過ごしたい。',
      type2Style: '深い精神的なつながりと対話を求める。お互いの夢や理想を共有したい。',
      comparison: 'ISFPは「感覚的な共有」を、INFPは「精神的な共有」を求めます。'
    },
    commonMisconceptions: [
      'どちらもアーティストだが、ISFPは視覚的、INFPは文学的',
      'ISFPは現実的ではないと思われるが、実は非常に観察眼が鋭い',
      'INFPは弱く見えるが、信念のためには非常に強くなる'
    ],
    howToDistinguish: [
      {
        question: '休日は何をしたいですか？',
        type1Answer: 'ISFP: 美味しいものを食べたり、自然の中に行ったり、ショッピングを楽しみたい。',
        type2Answer: 'INFP: カフェで読書したり、空想にふけったり、深い話をしたい。'
      },
      {
        question: '抽象的な理論や哲学についてどう思いますか？',
        type1Answer: 'ISFP: 現実の生活に関係なければあまり興味がない。具体的で目に見えるものが好き。',
        type2Answer: 'INFP: とても興味がある。人生の意味や宇宙の心理について考えるのが好き。'
      }
    ]
  }
};

// 人気の比較ペア
export const popularComparisons = [
  'infp-infj',
  'intj-entj',
  'enfp-enfj',
  'istj-isfj',
  'intp-intj',
  'esfp-estp',
  'enfp-infp',
  'entj-estj'
];

export const allComparisonSlugs = Object.keys(comparisonDatabase);

