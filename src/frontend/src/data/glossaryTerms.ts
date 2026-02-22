export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  example: string;
  relatedTerms?: string[];
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    id: 'ask',
    term: 'Ask',
    definition:
      'The lowest price a seller is willing to accept for a stock. Also known as the offer price.',
    example:
      'If the ask price for a stock is $50.25, that is the minimum price you would pay to buy shares at that moment.',
    relatedTerms: ['Bid', 'Spread', 'Market Order'],
  },
  {
    id: 'bear-market',
    term: 'Bear Market',
    definition:
      'A market condition where prices are falling or expected to fall, typically defined as a decline of 20% or more from recent highs.',
    example:
      'During the 2008 financial crisis, the stock market entered a bear market, with the S&P 500 falling over 50% from its peak.',
    relatedTerms: ['Bull Market', 'Correction', 'Recession'],
  },
  {
    id: 'beta',
    term: 'Beta',
    definition:
      'A measure of a stock\'s volatility relative to the overall market. A beta of 1 means the stock moves with the market, above 1 means more volatile, below 1 means less volatile.',
    example:
      'A stock with a beta of 1.5 tends to move 50% more than the market. If the market rises 10%, the stock typically rises 15%.',
    relatedTerms: ['Volatility', 'Alpha', 'Risk'],
  },
  {
    id: 'bid',
    term: 'Bid',
    definition:
      'The highest price a buyer is willing to pay for a stock at a given time.',
    example:
      'If the bid price is $49.75, that is the maximum price you would receive if selling shares immediately.',
    relatedTerms: ['Ask', 'Spread', 'Market Order'],
  },
  {
    id: 'blue-chip',
    term: 'Blue Chip',
    definition:
      'Stocks of large, well-established, and financially sound companies with a history of reliable performance.',
    example:
      'Companies like Apple, Microsoft, and Johnson & Johnson are considered blue-chip stocks due to their size, stability, and track record.',
    relatedTerms: ['Large Cap', 'Dividend', 'Index'],
  },
  {
    id: 'bull-market',
    term: 'Bull Market',
    definition:
      'A market condition characterized by rising prices and investor optimism, typically defined as a rise of 20% or more from recent lows.',
    example:
      'From 2009 to 2020, the stock market experienced one of the longest bull markets in history, with the S&P 500 rising over 400%.',
    relatedTerms: ['Bear Market', 'Rally', 'Uptrend'],
  },
  {
    id: 'call-option',
    term: 'Call Option',
    definition:
      'A contract giving the buyer the right, but not obligation, to purchase a stock at a specified price (strike price) before a certain date.',
    example:
      'You buy a call option with a $50 strike price. If the stock rises to $60, you can exercise the option to buy at $50, making a profit.',
    relatedTerms: ['Put Option', 'Strike Price', 'Premium', 'Options'],
  },
  {
    id: 'capital-gains',
    term: 'Capital Gains',
    definition:
      'The profit realized from selling an asset for more than its purchase price.',
    example:
      'If you buy a stock for $1,000 and sell it for $1,500, you have a capital gain of $500.',
    relatedTerms: ['Capital Loss', 'Tax', 'Long-term', 'Short-term'],
  },
  {
    id: 'dividend',
    term: 'Dividend',
    definition:
      'A portion of a company\'s earnings distributed to shareholders, typically paid quarterly.',
    example:
      'If a company pays a $2 annual dividend and you own 100 shares, you receive $200 per year in dividend income.',
    relatedTerms: ['Dividend Yield', 'Ex-Dividend Date', 'Payout Ratio'],
  },
  {
    id: 'dividend-yield',
    term: 'Dividend Yield',
    definition:
      'The annual dividend payment divided by the stock price, expressed as a percentage.',
    example:
      'A stock priced at $100 paying a $4 annual dividend has a dividend yield of 4%.',
    relatedTerms: ['Dividend', 'Yield', 'Income Investing'],
  },
  {
    id: 'eps',
    term: 'EPS (Earnings Per Share)',
    definition:
      'A company\'s profit divided by the number of outstanding shares, indicating profitability per share.',
    example:
      'If a company earns $10 million and has 5 million shares outstanding, the EPS is $2.',
    relatedTerms: ['P/E Ratio', 'Earnings', 'Profitability'],
  },
  {
    id: 'etf',
    term: 'ETF (Exchange-Traded Fund)',
    definition:
      'A fund that holds a collection of stocks or other assets and trades on an exchange like a stock.',
    example:
      'The SPDR S&P 500 ETF (SPY) holds all 500 stocks in the S&P 500 index, allowing investors to buy the entire index with one purchase.',
    relatedTerms: ['Index Fund', 'Mutual Fund', 'Diversification'],
  },
  {
    id: 'ipo',
    term: 'IPO (Initial Public Offering)',
    definition:
      'The first time a company offers its stock to the public, transitioning from private to public ownership.',
    example:
      'When Facebook went public in 2012 through an IPO, investors could buy shares for the first time at $38 per share.',
    relatedTerms: ['Public Company', 'Underwriter', 'Lock-up Period'],
  },
  {
    id: 'limit-order',
    term: 'Limit Order',
    definition:
      'An order to buy or sell a stock at a specific price or better.',
    example:
      'You place a limit order to buy at $50. The order will only execute if the stock price reaches $50 or lower.',
    relatedTerms: ['Market Order', 'Stop Order', 'Order Types'],
  },
  {
    id: 'liquidity',
    term: 'Liquidity',
    definition:
      'The ease with which an asset can be bought or sold without significantly affecting its price.',
    example:
      'Large-cap stocks like Apple have high liquidity - you can buy or sell millions of dollars worth quickly without moving the price much.',
    relatedTerms: ['Volume', 'Spread', 'Market Depth'],
  },
  {
    id: 'market-cap',
    term: 'Market Capitalization',
    definition:
      'The total value of a company\'s outstanding shares, calculated by multiplying share price by number of shares.',
    example:
      'A company with 10 million shares trading at $50 per share has a market cap of $500 million.',
    relatedTerms: ['Large Cap', 'Mid Cap', 'Small Cap'],
  },
  {
    id: 'market-order',
    term: 'Market Order',
    definition:
      'An order to buy or sell a stock immediately at the best available current price.',
    example:
      'You place a market order to buy 100 shares. The order executes immediately at the current ask price, whatever it may be.',
    relatedTerms: ['Limit Order', 'Stop Order', 'Execution'],
  },
  {
    id: 'moving-average',
    term: 'Moving Average',
    definition:
      'A technical indicator that smooths price data by calculating the average price over a specific time period.',
    example:
      'A 50-day moving average calculates the average closing price over the past 50 days, helping identify trends.',
    relatedTerms: ['SMA', 'EMA', 'Technical Analysis'],
  },
  {
    id: 'pe-ratio',
    term: 'P/E Ratio (Price-to-Earnings)',
    definition:
      'A valuation metric calculated by dividing the stock price by earnings per share, indicating how much investors pay per dollar of earnings.',
    example:
      'A stock trading at $100 with EPS of $5 has a P/E ratio of 20, meaning investors pay $20 for every $1 of earnings.',
    relatedTerms: ['EPS', 'Valuation', 'PEG Ratio'],
  },
  {
    id: 'portfolio',
    term: 'Portfolio',
    definition:
      'A collection of investments owned by an individual or institution.',
    example:
      'Your portfolio might include 10 different stocks, 3 ETFs, and some bonds, representing your total investment holdings.',
    relatedTerms: ['Diversification', 'Asset Allocation', 'Holdings'],
  },
  {
    id: 'put-option',
    term: 'Put Option',
    definition:
      'A contract giving the buyer the right, but not obligation, to sell a stock at a specified price before a certain date.',
    example:
      'You buy a put option with a $50 strike price. If the stock falls to $40, you can exercise the option to sell at $50, limiting your loss.',
    relatedTerms: ['Call Option', 'Strike Price', 'Hedging'],
  },
  {
    id: 'resistance',
    term: 'Resistance',
    definition:
      'A price level where selling pressure is strong enough to prevent the price from rising further.',
    example:
      'A stock repeatedly fails to break above $100. This price level acts as resistance until enough buying pressure breaks through.',
    relatedTerms: ['Support', 'Breakout', 'Technical Analysis'],
  },
  {
    id: 'rsi',
    term: 'RSI (Relative Strength Index)',
    definition:
      'A momentum indicator measuring the speed and magnitude of price changes, ranging from 0 to 100.',
    example:
      'An RSI above 70 suggests a stock may be overbought and due for a pullback, while below 30 suggests oversold conditions.',
    relatedTerms: ['Momentum', 'Overbought', 'Oversold'],
  },
  {
    id: 'sector',
    term: 'Sector',
    definition:
      'A group of stocks in the same industry or with similar business activities.',
    example:
      'The technology sector includes companies like Apple, Microsoft, and Google, while the healthcare sector includes Pfizer and Johnson & Johnson.',
    relatedTerms: ['Industry', 'Diversification', 'Sector Rotation'],
  },
  {
    id: 'short-selling',
    term: 'Short Selling',
    definition:
      'Borrowing shares to sell them, hoping to buy them back later at a lower price and profit from the decline.',
    example:
      'You short 100 shares at $50. If the price falls to $40, you buy them back, return the borrowed shares, and keep the $10 per share profit.',
    relatedTerms: ['Long Position', 'Margin', 'Squeeze'],
  },
  {
    id: 'spread',
    term: 'Spread',
    definition:
      'The difference between the bid and ask price of a stock.',
    example:
      'If the bid is $49.75 and the ask is $50.25, the spread is $0.50. Tighter spreads indicate higher liquidity.',
    relatedTerms: ['Bid', 'Ask', 'Liquidity'],
  },
  {
    id: 'stop-loss',
    term: 'Stop-Loss Order',
    definition:
      'An order that automatically sells a stock when it reaches a specified price, limiting potential losses.',
    example:
      'You buy a stock at $50 and set a stop-loss at $45. If the price drops to $45, the stock automatically sells, limiting your loss to $5 per share.',
    relatedTerms: ['Stop Order', 'Risk Management', 'Trailing Stop'],
  },
  {
    id: 'support',
    term: 'Support',
    definition:
      'A price level where buying pressure is strong enough to prevent the price from falling further.',
    example:
      'A stock repeatedly bounces off $50. This price level acts as support, with buyers stepping in at that price.',
    relatedTerms: ['Resistance', 'Breakdown', 'Technical Analysis'],
  },
  {
    id: 'volatility',
    term: 'Volatility',
    definition:
      'The degree of variation in a stock\'s price over time, indicating risk and potential for large price swings.',
    example:
      'A stock that moves 5% daily is highly volatile, while one that moves 0.5% daily is low volatility.',
    relatedTerms: ['Beta', 'Standard Deviation', 'VIX'],
  },
  {
    id: 'volume',
    term: 'Volume',
    definition:
      'The number of shares traded during a specific period, indicating the level of activity and liquidity.',
    example:
      'If 10 million shares of a stock trade in one day, that is the daily volume. High volume often confirms price trends.',
    relatedTerms: ['Liquidity', 'Average Volume', 'Trading Activity'],
  },
  {
    id: 'yield',
    term: 'Yield',
    definition:
      'The income return on an investment, typically expressed as a percentage.',
    example:
      'A bond paying $50 annually on a $1,000 investment has a 5% yield.',
    relatedTerms: ['Dividend Yield', 'Return', 'Income'],
  },
];
