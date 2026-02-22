export interface ContentItem {
  id: string;
  type: 'lesson' | 'tutorial';
  title: string;
  description: string;
  content?: string;
  image?: string;
  prerequisites?: string[];
  objectives?: string[];
  steps?: { title: string; content: string }[];
}

export const beginnerContent: ContentItem[] = [
  {
    id: 'beginner-1',
    type: 'lesson',
    title: 'What Are Stocks?',
    description: 'Understanding the fundamental concept of stocks and ownership',
    content: `A stock represents a share of ownership in a company. When you buy a stock, you become a partial owner of that company, known as a shareholder.

Companies issue stocks to raise money for growth, expansion, or other business needs. In return, shareholders may receive dividends (a portion of profits) and can benefit from the stock's price appreciation.

There are two main types of stocks:
• Common Stock: Gives voting rights and potential dividends
• Preferred Stock: Priority for dividends but typically no voting rights

The value of a stock fluctuates based on company performance, market conditions, and investor sentiment.`,
  },
  {
    id: 'beginner-2',
    type: 'lesson',
    title: 'How Stock Markets Work',
    description: 'Learn about stock exchanges and how trading happens',
    content: `Stock markets are platforms where buyers and sellers trade stocks. The most famous exchanges include the New York Stock Exchange (NYSE) and NASDAQ.

How Trading Works:
1. Investors place buy or sell orders through brokers
2. Orders are matched on the exchange
3. Trades are executed at agreed prices
4. Ownership is transferred electronically

Market Hours: Most exchanges operate during business hours (9:30 AM - 4:00 PM ET for US markets).

Prices change constantly based on supply and demand. When more people want to buy a stock than sell it, the price goes up. When more want to sell than buy, the price goes down.`,
  },
  {
    id: 'beginner-3',
    type: 'lesson',
    title: 'Bull vs Bear Markets',
    description: 'Understanding market trends and investor sentiment',
    content: `Bull and bear markets describe the overall direction and sentiment of the stock market.

Bull Market:
• Prices are rising or expected to rise
• Investor confidence is high
• Economy is typically strong
• Characterized by optimism and buying

Bear Market:
• Prices are falling (typically 20% or more from recent highs)
• Investor confidence is low
• Economic concerns are present
• Characterized by pessimism and selling

Understanding these market conditions helps investors make informed decisions about when to buy, hold, or sell stocks.`,
    image: '/assets/generated/bull-bear-diagram.dim_800x400.png',
  },
  {
    id: 'beginner-4',
    type: 'lesson',
    title: 'Getting Started with Investing',
    description: 'First steps to begin your investment journey',
    content: `Starting your investment journey requires preparation and understanding:

1. Set Clear Goals: Define what you're investing for (retirement, house, education)
2. Assess Your Risk Tolerance: Understand how much volatility you can handle
3. Build an Emergency Fund: Have 3-6 months of expenses saved first
4. Choose a Broker: Select a reputable online brokerage platform
5. Start Small: Begin with amounts you're comfortable with
6. Diversify: Don't put all your money in one stock
7. Think Long-Term: Successful investing is a marathon, not a sprint

Remember: Never invest money you can't afford to lose, and always do your research before buying any stock.`,
  },
  {
    id: 'beginner-5',
    type: 'lesson',
    title: 'Understanding Risk',
    description: 'Learn about investment risks and how to manage them',
    content: `All investments carry risk, but understanding and managing risk is key to successful investing.

Types of Risk:
• Market Risk: Overall market declines affect your investments
• Company Risk: Specific company problems impact stock value
• Liquidity Risk: Difficulty selling an investment quickly
• Inflation Risk: Your returns don't keep pace with inflation

Risk Management Strategies:
1. Diversification: Spread investments across different stocks and sectors
2. Asset Allocation: Balance stocks with bonds and other assets
3. Regular Review: Monitor and adjust your portfolio
4. Stay Informed: Keep up with market news and company performance
5. Avoid Emotional Decisions: Don't panic sell during downturns

Higher potential returns typically come with higher risk. Find the balance that matches your goals and comfort level.`,
  },
  {
    id: 'beginner-6',
    type: 'lesson',
    title: 'Basic Stock Terminology',
    description: 'Essential terms every investor should know',
    content: `Key Terms to Know:

• Share: A single unit of stock ownership
• Portfolio: Collection of all your investments
• Dividend: Payment made by company to shareholders
• Market Cap: Total value of a company's outstanding shares
• P/E Ratio: Price-to-Earnings ratio, measures stock valuation
• Volume: Number of shares traded in a period
• Bid/Ask: Highest price buyers will pay / Lowest price sellers will accept
• IPO: Initial Public Offering, when a company first sells stock publicly
• Blue Chip: Large, established, financially sound companies
• Volatility: How much a stock's price fluctuates

Understanding these terms will help you read financial news and make informed investment decisions.`,
  },
  {
    id: 'beginner-tutorial-1',
    type: 'tutorial',
    title: 'Opening Your First Brokerage Account',
    description: 'Step-by-step guide to setting up your investment account',
    prerequisites: ['Basic understanding of stocks', 'Valid identification', 'Bank account for funding'],
    objectives: [
      'Successfully open a brokerage account',
      'Understand account types and features',
      'Fund your account and prepare for your first trade',
    ],
    steps: [
      {
        title: 'Research and Choose a Broker',
        content: `Compare different online brokers based on:
• Commission fees (many now offer $0 commissions)
• Account minimums
• Available investment options
• Educational resources
• User interface and mobile app quality
• Customer service

Popular beginner-friendly brokers include Fidelity, Charles Schwab, and Robinhood.`,
      },
      {
        title: 'Gather Required Information',
        content: `You'll need:
• Social Security Number or Tax ID
• Driver's license or government ID
• Employment information
• Bank account details for funding
• Contact information

Have these ready before starting the application.`,
      },
      {
        title: 'Complete the Application',
        content: `Fill out the online application with:
• Personal information
• Financial information (income, net worth)
• Investment experience and objectives
• Risk tolerance assessment

Be honest and accurate - this helps the broker provide appropriate services.`,
      },
      {
        title: 'Choose Account Type',
        content: `Select the right account:
• Individual Brokerage: Standard taxable account
• IRA (Traditional or Roth): Tax-advantaged retirement account
• Joint Account: Shared with another person

For beginners, an individual brokerage account is often the simplest start.`,
      },
      {
        title: 'Fund Your Account',
        content: `Transfer money to your new account:
• Link your bank account
• Initiate an electronic transfer (ACH)
• Wait 2-5 business days for funds to clear
• Some brokers offer instant deposits up to certain limits

Start with an amount you're comfortable investing.`,
      },
      {
        title: 'Explore the Platform',
        content: `Before trading, familiarize yourself with:
• How to search for stocks
• How to place orders
• Research tools available
• Educational resources
• Account settings and preferences

Many brokers offer paper trading (practice with virtual money) - use this to learn!`,
      },
    ],
  },
  {
    id: 'beginner-tutorial-2',
    type: 'tutorial',
    title: 'Making Your First Stock Purchase',
    description: 'Learn how to research and buy your first stock',
    prerequisites: ['Funded brokerage account', 'Basic understanding of stocks', 'Investment goals defined'],
    objectives: [
      'Research and select a stock to purchase',
      'Understand different order types',
      'Successfully execute your first trade',
    ],
    steps: [
      {
        title: 'Research Potential Stocks',
        content: `Start with companies you know and understand:
• Look at products/services you use daily
• Research the company's financial health
• Read recent news and earnings reports
• Check analyst ratings and price targets
• Review the company's growth prospects

For beginners, consider starting with well-established blue-chip companies.`,
      },
      {
        title: 'Determine Your Investment Amount',
        content: `Decide how much to invest:
• Never invest more than you can afford to lose
• Consider starting with a small amount ($100-$500)
• Plan to diversify across multiple stocks over time
• Leave room in your budget for future investments

Remember: You don't need to buy whole shares - many brokers offer fractional shares.`,
      },
      {
        title: 'Understand Order Types',
        content: `Choose the right order type:

Market Order: Buys immediately at current market price
• Pros: Fast execution
• Cons: Price may vary slightly

Limit Order: Buys only at your specified price or better
• Pros: Price control
• Cons: May not execute if price doesn't reach your limit

For beginners, market orders during market hours are simplest.`,
      },
      {
        title: 'Place Your Order',
        content: `Execute the trade:
1. Search for the stock by ticker symbol
2. Click "Buy" or "Trade"
3. Enter the number of shares or dollar amount
4. Select order type (market or limit)
5. Review the order details carefully
6. Confirm and submit the order

You'll receive a confirmation once the order is executed.`,
      },
      {
        title: 'Monitor Your Investment',
        content: `After purchasing:
• Check your portfolio to confirm the purchase
• Set up price alerts if desired
• Review company news regularly
• Track performance but avoid obsessive checking
• Remember your long-term investment goals

Don't panic over short-term price fluctuations - focus on the long term.`,
      },
      {
        title: 'Document and Learn',
        content: `Keep records and reflect:
• Note why you bought this stock
• Track your investment thesis
• Learn from the experience
• Plan your next investment
• Continue educating yourself

Every investment is a learning opportunity. Take notes on what works and what doesn't.`,
      },
    ],
  },
];
