import { ContentItem } from './beginnerContent';

export const intermediateContent: ContentItem[] = [
  {
    id: 'intermediate-1',
    type: 'lesson',
    title: 'Reading Stock Charts',
    description: 'Master the basics of technical chart analysis',
    content: `Stock charts visualize price movements over time and are essential for technical analysis.

Chart Types:
• Line Charts: Simple price over time
• Bar Charts: Show open, high, low, close (OHLC)
• Candlestick Charts: Visual representation of OHLC with color coding

Key Elements:
• Price Axis: Vertical axis showing stock price
• Time Axis: Horizontal axis showing time period
• Volume: Bars showing trading activity
• Moving Averages: Lines showing average price over time

Timeframes:
• Intraday: Minutes to hours (day trading)
• Daily: Each point represents one day
• Weekly/Monthly: Longer-term trends

Learning to read charts helps identify trends, support/resistance levels, and potential entry/exit points.`,
    image: '/assets/generated/candlestick-patterns.dim_600x400.png',
  },
  {
    id: 'intermediate-2',
    type: 'lesson',
    title: 'Technical Analysis Basics',
    description: 'Introduction to technical indicators and patterns',
    content: `Technical analysis uses historical price and volume data to predict future movements.

Popular Indicators:
• Moving Averages (MA): Smooth out price data to identify trends
• Relative Strength Index (RSI): Measures momentum (0-100 scale)
• MACD: Shows relationship between two moving averages
• Bollinger Bands: Volatility indicator with upper/lower bands

Common Patterns:
• Head and Shoulders: Reversal pattern
• Double Top/Bottom: Reversal signals
• Triangles: Continuation patterns
• Flags and Pennants: Short-term continuation

Support and Resistance:
• Support: Price level where buying pressure prevents further decline
• Resistance: Price level where selling pressure prevents further rise

Technical analysis helps time entries and exits, but should be combined with fundamental analysis for best results.`,
  },
  {
    id: 'intermediate-3',
    type: 'lesson',
    title: 'Fundamental Analysis',
    description: 'Evaluating company value and financial health',
    content: `Fundamental analysis examines a company's financial health and intrinsic value.

Key Financial Statements:
• Income Statement: Revenue, expenses, profit
• Balance Sheet: Assets, liabilities, equity
• Cash Flow Statement: Cash in and out

Important Metrics:
• P/E Ratio: Price relative to earnings
• EPS: Earnings Per Share
• ROE: Return on Equity
• Debt-to-Equity: Financial leverage
• Revenue Growth: Sales trend over time

Qualitative Factors:
• Management quality and track record
• Competitive advantages (moat)
• Industry position and market share
• Growth prospects and innovation

Fundamental analysis helps determine if a stock is undervalued or overvalued relative to its true worth.`,
  },
  {
    id: 'intermediate-4',
    type: 'lesson',
    title: 'Portfolio Diversification',
    description: 'Building a balanced investment portfolio',
    content: `Diversification reduces risk by spreading investments across different assets.

Diversification Strategies:
• Across Sectors: Technology, healthcare, finance, consumer goods, etc.
• By Market Cap: Large-cap, mid-cap, small-cap stocks
• Geographic: Domestic and international markets
• Asset Classes: Stocks, bonds, real estate, commodities

The 60/40 Rule:
Traditional balanced portfolio: 60% stocks, 40% bonds
Adjust based on age, risk tolerance, and goals

Rebalancing:
• Review portfolio quarterly or annually
• Sell overweight positions
• Buy underweight positions
• Maintain target allocation

Benefits:
• Reduces portfolio volatility
• Protects against sector-specific downturns
• Provides more consistent returns over time

Remember: Diversification doesn't guarantee profits but helps manage risk.`,
    image: '/assets/generated/diversification-infographic.dim_800x600.png',
  },
  {
    id: 'intermediate-5',
    type: 'lesson',
    title: 'Trading Strategies',
    description: 'Common approaches to buying and selling stocks',
    content: `Different trading strategies suit different goals and timeframes.

Buy and Hold:
• Long-term strategy (years to decades)
• Minimal trading, lower costs
• Relies on market growth over time
• Best for retirement accounts

Swing Trading:
• Hold positions days to weeks
• Capitalize on short-term trends
• Requires technical analysis skills
• More active than buy and hold

Value Investing:
• Buy undervalued stocks
• Focus on fundamentals
• Patient approach
• Made famous by Warren Buffett

Growth Investing:
• Target high-growth companies
• Higher P/E ratios acceptable
• Focus on future potential
• Higher risk, higher reward potential

Dollar-Cost Averaging:
• Invest fixed amount regularly
• Reduces timing risk
• Builds position over time
• Great for beginners

Choose a strategy that matches your goals, time commitment, and risk tolerance.`,
  },
  {
    id: 'intermediate-6',
    type: 'lesson',
    title: 'Understanding Market Orders',
    description: 'Advanced order types for better trade execution',
    content: `Beyond basic market and limit orders, several advanced order types help manage trades.

Stop-Loss Order:
• Automatically sells if price drops to specified level
• Limits potential losses
• Protects profits on winning positions

Stop-Limit Order:
• Combines stop and limit orders
• More control but may not execute

Trailing Stop:
• Stop price adjusts with favorable price movement
• Locks in gains while allowing upside

Good-Till-Canceled (GTC):
• Order remains active until executed or canceled
• Useful for limit orders at specific prices

Fill-or-Kill (FOK):
• Must execute immediately and completely or cancel
• Used for large orders

All-or-None (AON):
• Must execute entire order or none
• Prevents partial fills

Understanding these order types gives you more control over trade execution and risk management.`,
  },
  {
    id: 'intermediate-tutorial-1',
    type: 'tutorial',
    title: 'Performing Technical Analysis',
    description: 'Step-by-step guide to analyzing stocks using technical indicators',
    prerequisites: [
      'Understanding of stock charts',
      'Brokerage account with charting tools',
      'Basic knowledge of trends',
    ],
    objectives: [
      'Identify trends using moving averages',
      'Use RSI to find overbought/oversold conditions',
      'Recognize common chart patterns',
    ],
    steps: [
      {
        title: 'Set Up Your Chart',
        content: `Open your broker's charting platform:
• Select the stock you want to analyze
• Choose candlestick chart type
• Set timeframe (daily is good for swing trading)
• Ensure volume is displayed at bottom

Most platforms offer customizable layouts - experiment to find what works for you.`,
      },
      {
        title: 'Add Moving Averages',
        content: `Apply moving averages to identify trends:
• Add 50-day Simple Moving Average (SMA)
• Add 200-day Simple Moving Average (SMA)
• Price above both MAs = uptrend
• Price below both MAs = downtrend
• MA crossovers signal potential trend changes

Golden Cross: 50-day crosses above 200-day (bullish)
Death Cross: 50-day crosses below 200-day (bearish)`,
      },
      {
        title: 'Apply RSI Indicator',
        content: `Add Relative Strength Index:
• Typically displayed below price chart
• Scale from 0 to 100
• Above 70 = potentially overbought (may decline)
• Below 30 = potentially oversold (may rise)
• Look for divergences between price and RSI

RSI helps identify momentum and potential reversal points.`,
      },
      {
        title: 'Identify Support and Resistance',
        content: `Mark key price levels:
• Support: Previous lows where price bounced
• Resistance: Previous highs where price stalled
• Draw horizontal lines at these levels
• Price often reacts when approaching these levels

These levels help determine entry and exit points.`,
      },
      {
        title: 'Look for Chart Patterns',
        content: `Recognize common patterns:
• Triangles: Converging trendlines
• Head and Shoulders: Three peaks, middle highest
• Double Top/Bottom: Two similar highs/lows
• Flags: Brief consolidation after strong move

Patterns suggest potential future price direction.`,
      },
      {
        title: 'Make Your Trading Decision',
        content: `Combine all analysis:
• Is the trend up or down?
• Is RSI showing overbought/oversold?
• Is price near support or resistance?
• Are there any patterns forming?
• Does volume confirm the move?

Use multiple indicators to confirm your thesis before trading.`,
      },
    ],
  },
  {
    id: 'intermediate-tutorial-2',
    type: 'tutorial',
    title: 'Building a Diversified Portfolio',
    description: 'Create a balanced portfolio across sectors and asset types',
    prerequisites: [
      'Funded brokerage account',
      'Understanding of diversification',
      'Investment goals defined',
    ],
    objectives: [
      'Allocate investments across different sectors',
      'Balance risk and return',
      'Create a rebalancing schedule',
    ],
    steps: [
      {
        title: 'Determine Your Asset Allocation',
        content: `Decide your stock/bond mix based on:
• Age: Younger = more stocks, older = more bonds
• Risk tolerance: High = more stocks, low = more bonds
• Time horizon: Long = more stocks, short = more bonds

Example allocations:
• Aggressive (age 20-35): 90% stocks, 10% bonds
• Moderate (age 35-50): 70% stocks, 30% bonds
• Conservative (age 50+): 50% stocks, 50% bonds`,
      },
      {
        title: 'Select Sector Allocation',
        content: `Divide stock portion across sectors:
• Technology: 15-20%
• Healthcare: 10-15%
• Financial: 10-15%
• Consumer Discretionary: 10-15%
• Industrials: 10-15%
• Consumer Staples: 5-10%
• Energy: 5-10%
• Utilities: 5-10%
• Real Estate: 5-10%

Adjust based on market conditions and personal conviction.`,
      },
      {
        title: 'Choose Individual Stocks or Funds',
        content: `For each sector, select:
• Individual stocks (requires more research)
• Sector ETFs (instant diversification)
• Index funds (broad market exposure)

Beginners often benefit from ETFs and index funds:
• Lower risk than individual stocks
• Professional management
• Lower costs than mutual funds`,
      },
      {
        title: 'Calculate Position Sizes',
        content: `Determine how much to invest in each holding:
• No single stock should exceed 5-10% of portfolio
• Larger positions in higher-conviction ideas
• Smaller positions in speculative plays
• Keep some cash (5-10%) for opportunities

Example $10,000 portfolio:
• 10 stocks at $800-900 each
• Or 5-7 ETFs at $1,200-1,500 each`,
      },
      {
        title: 'Execute Your Purchases',
        content: `Buy your selected investments:
• Start with largest positions first
• Use limit orders to control prices
• Consider dollar-cost averaging over weeks
• Keep transaction costs in mind
• Document your investment thesis for each holding

Don't rush - building a portfolio takes time.`,
      },
      {
        title: 'Set Up Monitoring and Rebalancing',
        content: `Maintain your portfolio:
• Review quarterly or semi-annually
• Rebalance when allocations drift 5%+ from targets
• Sell overweight positions
• Buy underweight positions
• Consider tax implications when rebalancing

Set calendar reminders to review your portfolio regularly.`,
      },
    ],
  },
];
