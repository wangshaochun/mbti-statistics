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
  percentage?: string;
};

export const typeData: Record<string, TypeInfo> = {
  ENFJ: { name: '主人公', category: '外交官', description: 'カリスマ性があり魅力的なリーダー。', traits: ['共感力が高い'], strengths: ['優れたコミュニケーション能力'], weaknesses: ['完璧主義'], compatibility: { excellent: ['ENFP'], good: [], challenging: [] }, careers: ['教師'], percentage: '10.23%' },
  INFP: { name: '仲介者', category: '外交官', description: '詩的で親切な利他主義者', traits: ['創造性豊か'], strengths: ['深い共感力'], weaknesses: ['決断力不足'], compatibility: { excellent: ['ENFJ'], good: [], challenging: [] }, careers: ['作家'], percentage: '12.85%' }
};
