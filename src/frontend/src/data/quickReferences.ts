export interface QuickReference {
  id: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  title: string;
  description: string;
  items: { label: string; value: string }[];
}

export const quickReferences: QuickReference[] = [
  {
    id: 'beginner-ref-1',
    level: 'beginner',
    title: 'Stock Market Basics Cheat Sheet',
    description: 'Essential concepts every beginner should know',
    items: [
      {
        label: 'Stock',
        value: 'Share of ownership in a company',
      },
      {
        label: 'Bull Market',
        value: 'Rising prices, investor optimism',
      },
      {
        label: 'Bear Market',
        value: 'Falling prices (20%+ decline)',
      },
      {
        label: 'Dividend',
        value: 'Company profit paid to shareholders',
      },
      {
        label: 'Market Cap',
        value: 'Total value of company shares',
      },
      {
        label: 'P/E Ratio',
        value: 'Price divided by earnings per share',
      },
      {
        label: 'Volume',
        value: 'Number of shares traded',
      },
      {
        label: 'IPO',
        value: 'Initial Public Offering - first stock sale',
      },
    ],
  },
  {
    id: 'beginner-ref-2',
    level: 'beginner',
    title: 'Investment Risk Checklist',
    description: 'Key questions before making any investment',
    items: [
      {
        label: 'Can I afford to lose this money?',
        value: 'Only invest what you can afford to lose',
      },
      {
        label: 'Do I understand this investment?',
        value: 'Never invest in what you don\'t understand',
      },
      {
        label: 'What is my time horizon?',
        value: 'Match investments to your timeline',
      },
      {
        label: 'Am I diversified?',
        value: 'Don\'t put all eggs in one basket',
      },
      {
        label: 'Have I done my research?',
        value: 'Read financial statements and news',
      },
      {
        label: 'What are the fees?',
        value: 'Understand all costs involved',
      },
    ],
  },
  {
    id: 'intermediate-ref-1',
    level: 'intermediate',
    title: 'Technical Analysis Quick Reference',
    description: 'Common indicators and what they tell you',
    items: [
      {
        label: 'Moving Average (MA)',
        value: 'Trend direction - price above MA is bullish',
      },
      {
        label: 'RSI (0-100)',
        value: 'Above 70 = overbought, below 30 = oversold',
      },
      {
        label: 'MACD',
        value: 'Crossover above signal line = bullish',
      },
      {
        label: 'Bollinger Bands',
        value: 'Price at upper band = overbought, lower = oversold',
      },
      {
        label: 'Volume',
        value: 'Confirms trends - rising volume validates moves',
      },
      {
        label: 'Support/Resistance',
        value: 'Key price levels where reversals occur',
      },
    ],
  },
  {
    id: 'intermediate-ref-2',
    level: 'intermediate',
    title: 'Portfolio Allocation Guide',
    description: 'Suggested allocations by age and risk tolerance',
    items: [
      {
        label: 'Age 20-30 (Aggressive)',
        value: '90% stocks, 10% bonds',
      },
      {
        label: 'Age 30-40 (Growth)',
        value: '80% stocks, 20% bonds',
      },
      {
        label: 'Age 40-50 (Moderate)',
        value: '70% stocks, 30% bonds',
      },
      {
        label: 'Age 50-60 (Balanced)',
        value: '60% stocks, 40% bonds',
      },
      {
        label: 'Age 60+ (Conservative)',
        value: '40-50% stocks, 50-60% bonds',
      },
      {
        label: 'Rebalancing',
        value: 'Review quarterly, rebalance when 5%+ off target',
      },
    ],
  },
  {
    id: 'advanced-ref-1',
    level: 'advanced',
    title: 'Options Strategy Quick Guide',
    description: 'Common options strategies and when to use them',
    items: [
      {
        label: 'Covered Call',
        value: 'Own stock + sell call = income generation',
      },
      {
        label: 'Protective Put',
        value: 'Own stock + buy put = downside protection',
      },
      {
        label: 'Long Call',
        value: 'Bullish bet with limited risk',
      },
      {
        label: 'Long Put',
        value: 'Bearish bet with limited risk',
      },
      {
        label: 'Bull Call Spread',
        value: 'Buy call + sell higher call = limited risk/reward',
      },
      {
        label: 'Iron Condor',
        value: 'Profit from low volatility, defined risk',
      },
    ],
  },
  {
    id: 'advanced-ref-2',
    level: 'advanced',
    title: 'Risk Management Formulas',
    description: 'Key calculations for portfolio risk management',
    items: [
      {
        label: 'Position Size',
        value: 'Risk Amount ÷ (Entry Price - Stop Loss)',
      },
      {
        label: 'Risk Per Trade',
        value: 'Typically 1-2% of total portfolio',
      },
      {
        label: 'Sharpe Ratio',
        value: '(Return - Risk-Free Rate) ÷ Standard Deviation',
      },
      {
        label: 'Beta',
        value: 'Covariance(Stock, Market) ÷ Variance(Market)',
      },
      {
        label: 'Kelly Criterion',
        value: '(Win% × Avg Win - Loss% × Avg Loss) ÷ Avg Win',
      },
      {
        label: 'Max Drawdown',
        value: '(Peak Value - Trough Value) ÷ Peak Value',
      },
    ],
  },
];
