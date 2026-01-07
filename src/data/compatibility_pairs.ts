export type CompatibilityDetail = {
  type1: string;
  type2: string;
  overallRating: number;
  loveCompatibility: {
    rating: number;
    strengths: string[];
    challenges: string[];
    advice: string[];
  };
  friendshipCompatibility: {
    rating: number;
    strengths: string[];
    challenges: string[];
    advice: string[];
  };
  workCompatibility: {
    rating: number;
    strengths: string[];
    challenges: string[];
    advice: string[];
  };
  cognitiveDynamics: string;
  realLifeExample?: string;
};

// 相性データベース - 主要な組み合わせ
export const compatibilityDatabase: Record<string, CompatibilityDetail> = {
  'infj-enfp': {
    type1: 'INFJ',
    type2: 'ENFP',
    overallRating: 95,
    loveCompatibility: {
      rating: 98,
      strengths: [
        '深い感情的な共鳴と豊かな対話が自然に生まれる',
        'INFJの洞察力とENFPの創造性が完璧に補完し合う',
        '互いの理想主義と価値観を深く理解し尊重できる',
        '感情面でのサポートと励ましが自然に行われる',
        '精神的な成長を共に追求できる関係性'
      ],
      challenges: [
        'ENFPの衝動性とINFJの計画性の違いで摩擦が生じることがある',
        '締め切り管理や実務面での責任分担が曖昧になりがち',
        'ENFPが多数のプロジェクトに手を出し、INFJが負担を感じる',
        '双方が感情的になりすぎて現実的な問題解決を後回しにする'
      ],
      advice: [
        '実務的なタスクは明確に分担し、定期的に確認する',
        'ENFPは計画を立ててから行動する習慣を、INFJは柔軟性を持つ',
        '感情的な対話と実務的な話し合いの時間を分ける',
        '互いの処理速度の違いを認め、ペースを尊重する'
      ]
    },
    friendshipCompatibility: {
      rating: 96,
      strengths: [
        '深い心の繋がりと理解が自然に育まれる',
        '互いのアイデアや夢を応援し合える関係',
        '長時間の対話でも疲れない心地よさ',
        '価値観や人生観を語り合える貴重な存在'
      ],
      challenges: [
        'ENFPの社交的な活動にINFJがついていけないことがある',
        'INFJの内向的な時間の必要性をENFPが理解しづらい',
        '計画の立て方や時間管理のスタイルが異なる'
      ],
      advice: [
        '社交活動と静かな時間のバランスを話し合う',
        '互いのエネルギー補給方法を理解し尊重する',
        '約束は具体的に決め、柔軟に調整する余地も残す'
      ]
    },
    workCompatibility: {
      rating: 92,
      strengths: [
        'INFJの戦略的思考とENFPの創造的アイデアが革新を生む',
        '人間関係の構築と維持が得意な組み合わせ',
        'プロジェクトに意味と情熱を注入できる',
        '互いの強みを活かした役割分担が自然にできる'
      ],
      challenges: [
        '締め切り管理と実行のディテールが弱くなりがち',
        'ENFPが複数のアイデアを出し、INFJが絞り込めない',
        '感情的な配慮が優先され、厳しい判断が遅れる'
      ],
      advice: [
        '第三者（Te強いタイプ）を巻き込み実行管理を強化する',
        'アイデア発散と収束のフェーズを明確に分ける',
        '定期的なマイルストーン設定と進捗確認を習慣化する'
      ]
    },
    cognitiveDynamics: 'INFJの主機能Ni（内向的直観）とENFPの主機能Ne（外向的直観）は、共に直観（N）を重視しながらも、INFJが一つの深いビジョンに収束するのに対し、ENFPは多様な可能性を広げる。この補完性が創造的な化学反応を生む。',
    realLifeExample: '多くのクリエイティブな夫婦や起業家ペアがこの組み合わせ。互いの理想を支え合いながら、社会的なインパクトのあるプロジェクトを実現するケースが多い。'
  },
  'intj-entp': {
    type1: 'INTJ',
    type2: 'ENTP',
    overallRating: 88,
    loveCompatibility: {
      rating: 85,
      strengths: [
        '知的な刺激と戦略的思考で惹かれ合う',
        '互いの論理性と独立性を尊重できる',
        '深い議論と概念的な対話を楽しめる',
        '長期的なビジョンを共有できる'
      ],
      challenges: [
        'ENTPの柔軟性とINTJの計画性の違いで衝突する',
        '感情表現が少なく、関係が冷たく感じられることがある',
        'ENTPの議論好きがINTJには非生産的に見える',
        '双方が譲らず、議論がヒートアップしがち'
      ],
      advice: [
        '定期的に感情を言語化し共有する時間を設ける',
        '議論のゴールを事前に設定し、結論に向かう',
        'ENTPは実行を、INTJは柔軟性を意識的に高める',
        '互いの強みを認め合い、役割分担を明確にする'
      ]
    },
    friendshipCompatibility: {
      rating: 93,
      strengths: [
        '知的な対話と議論を存分に楽しめる最高の相手',
        '互いのアイデアを発展させ合える関係',
        '長期的なプロジェクトを共に進められる',
        '独立性を尊重し合える距離感'
      ],
      challenges: [
        '感情的なサポートが不足しがち',
        'ENTPの社交性とINTJの内向性の違い',
        '計画の立て方で意見が対立する'
      ],
      advice: [
        '知的交流だけでなく、時には感情面も共有する',
        '互いのペースと社交スタイルを尊重する',
        '議論を楽しみつつも、決定事項を文書化する'
      ]
    },
    workCompatibility: {
      rating: 95,
      strengths: [
        '戦略立案と革新的アイデアの完璧な組み合わせ',
        'INTJの実行力とENTPの柔軟性が補完し合う',
        '複雑な問題を多角的に分析し解決できる',
        '高い基準を共有し質の高い成果を出せる'
      ],
      challenges: [
        '意思決定のスピード感が異なる',
        'ENTPが複数の方向性を提案し、INTJが混乱する',
        '細部の実行管理が双方とも苦手'
      ],
      advice: [
        '役割分担を明確化：INTJが戦略と実行、ENTPがアイデアと外部調整',
        '定期的なレビューで方向性を確認し軌道修正する',
        '実務担当者を加えて実行面を強化する'
      ]
    },
    cognitiveDynamics: 'INTJのNi-Teは収束的で計画的、ENTPのNe-Tiは発散的で柔軟。この対照的なアプローチが、時に衝突を生むが、適切に統合されれば圧倒的な相互補完となる。',
    realLifeExample: 'シリコンバレーの起業家ペアに多い組み合わせ。戦略家と革新者が組むことで、破壊的なイノベーションを生み出すケースが多い。'
  },
  'istj-esfj': {
    type1: 'ISTJ',
    type2: 'ESFJ',
    overallRating: 90,
    loveCompatibility: {
      rating: 92,
      strengths: [
        '実務的価値観と責任感を深く共有できる',
        '安定した家庭生活を共に築ける',
        '互いの誠実さと献身性を尊重し合える',
        'ISTJの計画性とESFJの対人スキルが補完的'
      ],
      challenges: [
        'ISTJの感情表現の少なさにESFJが不安を感じる',
        'ESFJの社交的な活動にISTJが疲れる',
        '変化への対応で意見が対立することがある'
      ],
      advice: [
        'ISTJは意識的に感謝や愛情を言葉で伝える',
        'ESFJは一人の時間の必要性を理解する',
        '社交活動と静かな時間のバランスを調整する',
        '互いの貢献を認め合う習慣を作る'
      ]
    },
    friendshipCompatibility: {
      rating: 88,
      strengths: [
        '信頼性の高い長期的な友情を築ける',
        '実務的な協力と相互支援が自然にできる',
        '共通の価値観で安心感を持てる',
        '計画的な活動を楽しめる'
      ],
      challenges: [
        'ISTJの内向性とESFJの外向性の違い',
        '感情的な交流の深さに差がある',
        'ESFJの社交的な期待にISTJが応えられない'
      ],
      advice: [
        '互いの社交スタイルを理解し尊重する',
        '計画的な交流と柔軟な対応を組み合わせる',
        '共通の趣味や活動を見つける'
      ]
    },
    workCompatibility: {
      rating: 94,
      strengths: [
        'ISTJの計画・品質管理とESFJの対外調整が完璧に補完',
        '責任感が強く、確実にタスクを完遂できる',
        '組織の安定運営に不可欠な組み合わせ',
        '細部への注意と人間関係の維持を両立できる'
      ],
      challenges: [
        '革新や変化への対応が遅れがち',
        'ISTJの論理とESFJの感情的配慮で優先順位が異なる',
        '新しいアイデアの採用に慎重すぎる'
      ],
      advice: [
        '定期的に外部の視点を取り入れ改善する',
        '役割分担を明確化：ISTJは内部管理、ESFJは外部対応',
        'イノベーション担当者を加えてバランスを取る'
      ]
    },
    cognitiveDynamics: '両者ともSi（内向的感覚）を持ち、過去の経験と確立された方法を重視する。ISTJはTe（外向的思考）で効率を、ESFJはFe（外向的感情）で調和を追求し、実務と人間関係のバランスを実現する。',
    realLifeExample: '伝統的な企業や家族経営ビジネスで成功するペア。安定性と信頼性を重視する環境で長期的な関係を築くケースが多い。'
  },
  'intp-entj': {
    type1: 'INTP',
    type2: 'ENTJ',
    overallRating: 98,
    loveCompatibility: {
      rating: 96,
      strengths: [
        '知的な対話と議論が尽きない最高のパートナー',
        '互いの論理性と能力を深く尊敬できる',
        'ENTJの実行力とINTPの分析力が完璧に噛み合う',
        '感情的な依存が少なく、自立した関係を築ける'
      ],
      challenges: [
        'ENTJがINTPの行動の遅さにイライラすることがある',
        'INTPがENTJの支配的な態度に反発を感じる',
        '感情的なケアが後回しになり、関係が乾燥する'
      ],
      advice: [
        'INTPはENTJの計画に沿って行動する努力をする',
        'ENTJはINTPの思考時間を尊重し、急かさない',
        '知的な繋がりだけでなく、感情的な感謝も言葉にする'
      ]
    },
    friendshipCompatibility: {
      rating: 95,
      strengths: [
        '共通の興味や理論について何時間でも語り合える',
        '互いに高い基準を持ち、切磋琢磨できる',
        '裏表のない率直なコミュニケーションが可能'
      ],
      challenges: [
        '趣味の好みが合わないと接点がなくなる',
        '互いに批判的になりすぎる',
        '社交活動へのスタンスの違い（ENTJは外、INTPは内）'
      ],
      advice: [
        '共通の知的プロジェクトやゲームに取り組む',
        '批判は建設的なフィードバックとして伝える',
        '互いの得意分野を教え合う'
      ]
    },
    workCompatibility: {
      rating: 99,
      strengths: [
        'ビジネスにおける最強のコンビネーションの一つ',
        'INTPが戦略を練り、ENTJが実行し拡大する',
        '問題解決能力と効率性が極めて高い',
        '互いの能力に対する絶対的な信頼'
      ],
      challenges: [
        '詳細なタスク管理や事務作業を互いに嫌がる',
        'INTPの完璧主義がENTJのスピード感を落とす',
        '権限争いや主導権争いが起きる可能性'
      ],
      advice: [
        'INTPを参謀役（CTO等）、ENTJをリーダー（CEO等）とする',
        '事務処理は第三者に任せるか、システム化する',
        '定期的な戦略会議で方向性を統一する'
      ]
    },
    cognitiveDynamics: 'ENTJのTe（外向的思考）とINTPのTi（内向的思考）は互いに異なる角度から論理を構築し、死角をなくす。INTPのNeが可能性を広げ、ENTJのNiがそれを収束させる。',
    realLifeExample: '技術創業者と経営のプロのような、技術ビジョンと経営手腕の補完関係。'
  },
  'enfp-intj': {
    type1: 'ENFP',
    type2: 'INTJ',
    overallRating: 96,
    loveCompatibility: {
      rating: 98,
      strengths: [
        '互いにないものに強く惹かれ合う「引力」がある',
        'INTJの冷静さをENFPが温め、ENFPの混乱をINTJが整える',
        '深い精神的な繋がりと理解を感じられる',
        'ENFPがINTJの隠れた感情を引き出す'
      ],
      challenges: [
        'INTJが一人の時間を必要とする時にENFPが寂しがる',
        'ENFPの気まぐれさにINTJが疲弊する',
        '生活リズムや整理整頓の基準が異なる'
      ],
      advice: [
        'INTJの「洞窟にこもる時間」を尊重する',
        'ENFPは計画変更を早めに伝える',
        '互いの愛情表現（言葉 vs 行動）の違いを理解する'
      ]
    },
    friendshipCompatibility: {
      rating: 94,
      strengths: [
        'INTJにとってENFPは世界を広げてくれる存在',
        '深刻な悩みも笑い飛ばせる明るい関係',
        '知的な話も馬鹿げた話も両方できる',
        '互いの成長を心から応援できる'
      ],
      challenges: [
        'ENFPの社交の広さにINTJがついていけない',
        '約束の時間や計画に対する感覚のズレ',
        'INTJの批判的なコメントにENFPが傷つく'
      ],
      advice: [
        'INTJはポジティブなフィードバックを意識する',
        'ENFPはINTJとの約束を最優先に守る',
        '1対1の深い対話の時間を定期的に持つ'
      ]
    },
    workCompatibility: {
      rating: 90,
      strengths: [
        'INTJのビジョンをENFPが広め、人を巻き込む',
        '創造的なアイデアを現実的な計画に落とし込める',
        '硬直した組織に変革をもたらす組み合わせ',
        '互いの弱点を補い合える役割分担'
      ],
      challenges: [
        '詳細な実務やルーチンワークの押し付け合い',
        'ENFPのアイデア発散にINTJが収拾つかなくなる',
        '締め切りに対する感覚の違いでストレス'
      ],
      advice: [
        'INTJがロードマップを引き、ENFPがチームビルディングを担当',
        'アイデア出しの時間と決定の時間を区切る',
        '実務サポート役を入れる'
      ]
    },
    cognitiveDynamics: 'INTJの主機能NiとENFPの主機能Neは、共に直観を駆使するが方向が逆。Niの深さとNeの広がりが合わさることで、全方位的な視点を持つことができる。',
    realLifeExample: '物語の主人公（ENFP）と賢明な助言者（INTJ）のような関係性。互いに人生の重要な視点を与え合う。'
  },
  'isfp-esfj': {
    type1: 'ISFP',
    type2: 'ESFJ',
    overallRating: 88,
    loveCompatibility: {
      rating: 90,
      strengths: [
        '温かく穏やかで平和な家庭を築ける',
        'ESFJの世話焼きとISFPの感謝が噛み合う',
        '美的感覚や楽しさを共有できる',
        '互いに相手を思いやる優しい関係'
      ],
      challenges: [
        'ISFPの自由奔放さにESFJが不安を感じる',
        'ESFJの「こうあるべき」という社会規範にISFPが反発する',
        '対立を避けすぎて問題が潜在化する'
      ],
      advice: [
        'ESFJはISFPのプライバシーと自由を尊重する',
        'ISFPはESFJへの感謝と言葉のコミュニケーションを増やす',
        '小さな不満も早めに優しく伝え合う'
      ]
    },
    friendshipCompatibility: {
      rating: 92,
      strengths: [
        '一緒にいて気を使わない心地よい関係',
        'ショッピングやグルメなど感覚的な楽しみを共有できる',
        '困った時にすぐに助け合える',
        '感情的なサポートが得意'
      ],
      challenges: [
        'ESFJのグループ付き合いにISFPが疲れる',
        'ISFPの気まぐれな行動変更',
        '深い議論や抽象的な話は広がりづらい'
      ],
      advice: [
        'アクティビティベースの付き合いを楽しむ',
        'ESFJはISFPを無理に集団に引き込まない',
        '互いの趣味の世界を尊重する'
      ]
    },
    workCompatibility: {
      rating: 85,
      strengths: [
        '職場の雰囲気を良くするムードメーカー',
        'ESFJの管理能力とISFPの実務能力',
        '具体的で現実的なタスクを確実にこなす',
        '顧客への対応が丁寧で評判が良い'
      ],
      challenges: [
        '長期的な戦略立案や分析業務',
        '批判的なフィードバックのやり取り',
        '変革や効率化よりも現状維持を好む'
      ],
      advice: [
        'ESFJが進行管理をし、ISFPが現場作業を担当する',
        '互いに肯定的な言葉かけでモチベーションを維持する',
        '客観的な数値目標を取り入れる'
      ]
    },
    cognitiveDynamics: '両者とも感覚（S）と感情（F）を優先するため、現実的で人間味のある判断を共有しやすい。ESFJのFeとISFPのFiの違いを理解することが鍵。',
    realLifeExample: '地域のコミュニティや芸術活動で協力し合うパートナー。穏やかで地に足のついた幸せを体現する。'
  },
  'estp-isfj': {
    type1: 'ESTP',
    type2: 'ISFJ',
    overallRating: 85,
    loveCompatibility: {
      rating: 88,
      strengths: [
        'ESTPがリードし、ISFJが支える伝統的な安定感',
        'ESTPの冒険心とISFJの家庭的要素のバランス',
        '互いに相手にない魅力を感じ、尊敬し合える',
        '具体的で活動的なデートを楽しめる'
      ],
      challenges: [
        'ESTPのリスクテイクにISFJがハラハラする',
        'ISFJの慎重さをESTPが退屈に感じる',
        '言葉の選び方でISFJが傷つくことがある'
      ],
      advice: [
        'ESTPはISFJの安心感を大切にし、感謝を伝える',
        'ISFJはESTPの挑戦を見守り、過度な心配を控える',
        '二人の時間を冒険と休息でバランス良く配分する'
      ]
    },
    friendshipCompatibility: {
      rating: 80,
      strengths: [
        'ESTPがISFJを新しい世界に連れ出してくれる',
        'ISFJがESTPのブレーキ役になれる',
        '実用的な助け合いができる関係',
        'スポーツやアウトドアなどを共に楽しめる'
      ],
      challenges: [
        '活動ペースの違い',
        'ESTPのデリカシーのない発言',
        'ISFJが断れずに振り回される'
      ],
      advice: [
        'ISFJは無理な時ははっきりとNoと言う練習をする',
        'ESTPはISFJのペースを配慮する',
        '短時間の集中的な活動で交流する'
      ]
    },
    workCompatibility: {
      rating: 88,
      strengths: [
        'ESTPの営業力・交渉力とISFJの事務処理・管理能力',
        '前線と後方支援の役割分担が明確',
        '現実的な問題解決能力が高い',
        '目標達成に向けて着実に進める'
      ],
      challenges: [
        '長期的な計画や抽象的なビジョンの共有',
        '変化への対応スピードの差',
        'リスクに対する許容度の違い'
      ],
      advice: [
        'ESTPが攻め、ISFJが守りの役割を徹底する',
        '定期的な報告・連絡・相談をルール化する',
        '互いの貢献領域を明確にし干渉しない'
      ]
    },
    cognitiveDynamics: 'ESTPのSe（外向的感覚）とISFJのSi（内向的感覚）は、同じ「感覚」でも「今ここ」と「過去の経験」という対比がある。TiとFeのバランスも良く、補完的。',
    realLifeExample: '活動的な起業家とそれを支える堅実なパートナー。あるいは、営業エースと頼れる業務サポート。'
  },
  'infp-enfj': {
    type1: 'INFP',
    type2: 'ENFJ',
    overallRating: 97,
    loveCompatibility: {
      rating: 99,
      strengths: [
        '言葉にしなくても通じ合える「ソウルメイト」感',
        'ENFJがINFPの感受性を守り、導いてくれる',
        'INFPの独自の世界観をENFJが深く理解し愛する',
        '精神的な成長と理想の追求を共有できる',
        '互いに相手の幸せを第一に考える献身性'
      ],
      challenges: [
        '現実的な問題（金銭、手続き）が疎かになる',
        'ENFJが過干渉になり、INFPが窮屈に感じる',
        '対立を避けすぎて本音を言えないことがある',
        '共依存的な関係になりやすい'
      ],
      advice: [
        '現実的なタスク管理の時間を意識的に設ける',
        'INFPは一人の時間を確保し、ENFJはそれを見守る',
        '「NO」と言うことも愛情であることを理解する'
      ]
    },
    friendshipCompatibility: {
      rating: 96,
      strengths: [
        '何でも話せる親友になれる',
        '互いの夢や理想を批判せずに応援し合える',
        '芸術、心理学、哲学などの話題で盛り上がる',
        '困った時に精神的な支柱となれる'
      ],
      challenges: [
        'ENFJの広い交友関係にINFPが嫉妬や疲れを感じる',
        'INFPの連絡不精をENFJが心配する',
        'ネガティブな感情のループに陥りやすい'
      ],
      advice: [
        '互いの社交スタイルを理解し尊重する',
        '深い話をできる時間を定期的に確保する',
        'ポジティブな未来の話をするように心がける'
      ]
    },
    workCompatibility: {
      rating: 90,
      strengths: [
        '共通のミッションや社会貢献のために協力できる',
        'ENFJがチームをまとめ、INFPがクリエイティブを担当',
        '人間関係のトラブルを未然に防ぐ配慮',
        '倫理的で意義のある仕事ができる'
      ],
      challenges: [
        '厳しい意思決定やリストラなどの判断',
        '論理的・構造的なシステムの構築',
        'ビジネスライクな割り切りができない'
      ],
      advice: [
        'T型（思考型）のメンバーをチームに入れバランスを取る',
        '感情と事実を分けて議論するルールを作る',
        'パーパス（目的）を常に確認し合う'
      ]
    },
    cognitiveDynamics: 'INFPのFi（内向的感情）とENFJのFe（外向的感情）は、内なる価値観と外なる調和という対比。ENFJはINFPの感情を言語化し、INFPはENFJに真の自分らしさを教える。',
    realLifeExample: '精神的指導者と詩人、あるいはNPOの代表と情熱的なスタッフ。理想を現実にするために強く結びつく。'
  }
};
