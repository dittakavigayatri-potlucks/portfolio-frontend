export const products = [
  {
  href: "",
  title: "Industrial Sector Equity Screening & Valuation Model",
  description:
    "A sell-side-style industrials research build combining integrated 3-statement modelling, valuation, peer benchmarking, and macro-sensitive forecast attribution.",
  thumbnail: "/images/stress-tester-1.png",
  images: [
    "/images/stress-tester-1.png",
    "/images/stress-tester-2.png",
    "/images/stress-tester-3.png",
    "/images/stress-tester-4.png",
    "/images/stress-tester-5.png",
  ],
  stack: [
    "Equity Research",
    "Financial Modeling",
    "DCF",
    "EV/EBITDA Comps",
    "Excel",
    "Python",
    "Macro Analysis",
    "Valuation Attribution",
  ],
  slug: "industrials-valuation",
  content: (
    <div>
      <p>
        This project is a sell-side-style equity screening and valuation system
        focused on industrial-sector names, built to replicate the discipline,
        structure, and narrative standards of institutional research. The
        framework combines company-level financial modelling with top-down macro
        context so that investment views are not produced as static snapshots,
        but as conditional judgments tied to capex cycles, purchasing-manager
        momentum, and the path of rates.
      </p>

      <p>
        The core of the system is an integrated 3-statement modelling workflow
        linking the P&amp;L, balance sheet, and cash flow statement across forecast
        horizons. Revenue drivers, margin assumptions, capital expenditure,
        working-capital dynamics, and financing flows are modelled jointly so
        that every forecast flows consistently through earnings, free cash flow,
        and valuation outputs. This makes the model suitable not just for point
        estimates, but for tracing exactly which operating assumptions produce
        changes in equity value.
      </p>

      <p>
        Layered on top is a relative- and intrinsic-valuation engine: discounted
        cash flow analysis is paired with EV/EBITDA peer benchmarking to produce
        triangulated fair-value ranges rather than single-number targets.
        Forecast inputs incorporate capex trends, PMI-linked industrial demand
        signals, and rate-cycle indicators, allowing the valuation to reflect
        the macro sensitivity that often drives dispersion within industrials.
        The result is a research process that mirrors how fundamental analysts
        connect business drivers to market pricing.
      </p>

      <p>
        Diagnostics and interpretability are first-class concerns. The framework
        is designed to produce full valuation attribution, showing how changes
        in margins, terminal assumptions, discount rates, or multiple ranges
        alter the final recommendation. That makes buy, hold, and sell calls far
        more defensible because the recommendation is tied to identifiable
        drivers rather than opaque spreadsheet mechanics.
      </p>

      <p>
        The final output is an investment-summary workflow with peer comparison,
        scenario-sensitive valuation ranges, and thesis articulation that reads
        like a compact research note. The project demonstrates the ability to
        bridge accounting fluency, macro awareness, and disciplined modelling,
        with a forward path toward automated screening, sensitivity dashboards,
        and sector-specific factor overlays.
      </p>
    </div>
  ),
},
  {
  href: "",
  title: "Multi-Asset Portfolio Optimization via MIQP",
  description:
    "An institutional portfolio construction framework using mixed-integer quadratic programming to enforce real-world allocation constraints across asset classes.",
  thumbnail: "/images/nlp2sql-4.png",
  images: [
    "/images/nlp2sql-4.png",
  ],
  stack: [
    "Portfolio Optimization",
    "Gurobi",
    "MIQP",
    "Asset Allocation",
    "Quantitative Finance",
    "Risk Management",
    "Constraint Engineering"
  ],
  slug: "miqp-portfolio",
  content: (
    <div>
      <p>
        This project is a multi-asset portfolio construction framework designed
        to move beyond textbook mean-variance optimization and toward the
        realities of institutional allocation. Instead of assuming frictionless,
        infinitely divisible portfolios, the system formulates the allocation
        problem as a Mixed-Integer Quadratic Program so that practical trading
        and policy constraints are embedded directly into the optimizer.
      </p>

      <p>
        The pipeline begins with a standard mean-variance objective, but layers
        on cardinality limits, minimum-lot sizes, and sector concentration caps
        to reflect the constraints actual managers face when deploying capital.
        This means the optimizer must choose not only how much to allocate, but
        also which positions deserve inclusion in the first place. The result is
        a much more realistic efficient frontier, one that acknowledges the
        combinatorial structure of implementation rather than abstracting it
        away.
      </p>

      <p>
        The framework is built across equity, fixed income, and commodity
        universes, allowing cross-asset trade-offs to emerge endogenously from
        the optimization itself. By benchmarking the MIQP solution against both
        unconstrained MVO and naive 1/N allocations, the project quantifies how
        much is gained from disciplined optimization and how much is lost when
        constraints are ignored. Sensitivity analysis further shows which rules
        bind most tightly and how the portfolio responds as the feasible set is
        relaxed or tightened.
      </p>

      <p>
        Interpretability is central to the design. Rather than treating the
        solver as a black box, the system surfaces which constraints are active,
        how they reshape the frontier, and where trade-offs between
        concentration, diversification, and implementability become most severe.
        That makes the optimizer useful not only for producing allocations, but
        also for explaining portfolio architecture in a policy or investment
        committee setting.
      </p>

      <p>
        Overall, the project demonstrates how integer-constrained optimization
        can deliver institutionally credible portfolios that are quantitatively
        rigorous and operationally deployable. Future extensions include
        turnover penalties, transaction-cost-aware rebalancing, and robust
        optimization under return and covariance uncertainty.
      </p>
    </div>
  ),
},
  {
    href: "",
  title: "Time-Series Momentum Strategy Across Asset Classes",
  description:
    "A systematic cross-asset trend-following framework using trailing-return signals, volatility scaling, and long-horizon tearsheet analytics.",
  thumbnail: "/images/SA-4.jpeg",
  images: [
    "/images/SA-1.jpeg",
    "/images/SA-2.jpeg",
    "/images/SA-3.jpeg",
    "/images/SA-4.jpeg",
  ],
  stack: [
    "Time Series Analysis",
    "Cross-Asset Investing",
    "Momentum",
    "Backtesting",
    "Risk Analytics"
  ],
  slug: "tsmom-strategy",
  content: (
    <div>
      <p>
        This project presents the design and backtesting of a cross-asset
        time-series momentum strategy built on the empirical observation that
        trends in liquid futures and major asset classes can persist over medium
        horizons. The framework is structured to capture those persistent moves
        systematically rather than discretionarily, translating historical price
        behavior into scaled position signals with clear risk controls.
      </p>

      <p>
        The methodology begins with 12-month trailing returns as the core signal
        used to determine directional exposure across equities, commodities, and
        fixed income. Rather than relying on nominal position sizes, the system
        applies ex-ante volatility scaling so that risk contribution is more
        comparable across assets with very different return distributions. This
        produces a cleaner measure of signal quality and prevents high-volatility
        contracts from mechanically dominating portfolio behavior.
      </p>

      <p>
        Performance evaluation is comprehensive and regime-aware. The strategy is
        tested over more than two decades of daily data, with full tearsheet
        outputs covering Sharpe ratio, Calmar ratio, maximum drawdown, rolling
        attribution, and period-specific behavior during major macro episodes.
        That allows the analysis to distinguish between environments in which
        trend-following thrives, such as prolonged macro dislocations, and those
        in which choppy reversals compress returns.
      </p>

      <p>
        The project is also designed to surface the economic logic behind
        results. Instead of stopping at headline performance, it decomposes
        return contributions across asset buckets and documents the specific
        catalysts associated with major gains and drawdowns. This gives the
        strategy a stronger research foundation and makes it easier to assess
        whether performance is being driven by a durable cross-asset effect or a
        small set of isolated market episodes.
      </p>

      <p>
        The final framework demonstrates a disciplined approach to systematic
        trend capture, combining transparent signal engineering with
        professional-grade analytics. Future extensions include faster and
        slower lookback ensembles, dynamic volatility targeting, and
        macro-conditioned overlays that adapt exposure to changing monetary and
        inflation regimes.
      </p>
    </div>
  ),
  },
  {
    href: "",
    title: "Deep Reinforcement Learning for Dynamic Portfolio Allocation",
    description:
      "A PPO-based allocation engine integrating NLP sentiment, macro regime features, options-implied volatility, and explainability for dynamic multi-asset investing.",
    thumbnail: "/images/fx2.jpeg",
    images: [
      "/images/fx1.jpeg",
      "/images/fx2.jpeg",
      "/images/fx3.jpeg",
      "/images/fx4.jpeg",
    ],
    stack: [
    "Deep Reinforcement Learning",
    "PPO",
    "NLP",
    "Macro Regimes",
    "Options-Implied Volatility"
  ],
    slug: "drl-allocation",
    content: (
    <div>
      <p>
        This project focuses on the development of a dynamic portfolio
        allocation framework using deep reinforcement learning to solve a
        sequential asset-allocation problem in a high-dimensional, changing
        market environment. Instead of generating static portfolio weights from
        one-period estimates, the system learns a policy that adapts over time
        as market states evolve, making it better suited to the path-dependent
        nature of real investment decisions.
      </p>

      <p>
        The core model extends recent DRL portfolio literature by integrating a
        richer state space that combines earnings-transcript sentiment,
        macro-regime indicators, and options-implied volatility surfaces across
        equities, fixed income, commodities, and cash. These inputs allow the
        agent to condition its actions not only on realized returns, but also on
        forward-looking information about narrative tone, macro environment, and
        market-implied risk. The policy is trained using Proximal Policy
        Optimization with turnover penalties and ESG exclusions so that learning
        is grounded in implementable rather than purely theoretical allocation
        behavior.
      </p>

      <p>
        Evaluation is carried out against constrained mean-variance benchmarks,
        with a focus on risk-adjusted performance rather than simple return
        maximization. The model is stress-tested across major dislocations,
        including the 2020 COVID crash and the 2022 rate-hike cycle, to examine
        whether adaptive policy learning provides value precisely when static
        optimization tends to struggle. Performance is assessed using Sharpe,
        Sortino, Calmar, net returns, and turnover-aware metrics, giving a more
        complete picture of realized investment quality.
      </p>

      <p>
        Explainability is treated as a serious requirement rather than an
        afterthought. SHAP-based interpretation is used to identify which state
        variables matter most to the learned allocation policy, helping separate
        genuine economic learning from unstable pattern extraction. This makes
        the system more defensible as a research product and more useful for
        understanding when the model leans on sentiment, macro conditions, or
        market-implied stress.
      </p>

      <p>
        Overall, the project demonstrates how reinforcement learning can be used
        to build a more adaptive, state-aware allocation engine when paired with
        domain-rich features and strong out-of-sample evaluation. Future
        extensions include transaction-cost simulation, hierarchical policy
        structures, and explicit regime-switching reward design.
      </p>
    </div>
    ),
  },
  {
    href: "",
    title: "Departmental Research Assistant, ISERP Columbia",
    description:
      "Applied causal-inference and count-data econometrics for policy research using quasi-Poisson regression, DiD design, and publication-ready empirical workflows.",
    thumbnail: "/images/paperchaseai1.png",
    images: [
      "/images/paperchaseai1.png",
      "/images/paperchaseai2.png",
      // "/images/paperchaseai3.png"
    ],
    stack: ["Econometrics", "Causal Inference", "Quasi-Poisson", "Difference-in-Differences", "Research Design"],
    slug: "iserp-ra",
    content: (
      <div>
        <p><strong>Core Methods:</strong>  
          Quasi-Poisson Regression, Difference-in-Differences, Robustness Diagnostics, Publication-Ready Visualization, Policy Evaluation  
          Research Workflow: Specification Testing, Counterfactual Design, Empirical Validation, Reproducible Outputs  
          Tooling: Python, Statistical Modelling, Data Visualization, Applied Social Science Inference</p>
        <p>
        This work reflects an applied research role at the Institute for Social and Economic Research and Policy at Columbia University, where I supported empirical policy analysis under Professor Sandhya Kajeepeta. The emphasis was on producing causal evidence that could withstand specification scrutiny, rather than simply fitting models to data. The research environment demanded methodological discipline, reproducibility, and a clear translation of econometric findings into downstream academic deliverables.
        </p>
        <p>
        A major component of the work involved applying quasi-Poisson regression to policy-relevant count outcomes, particularly in settings where variance structure made canonical Poisson assumptions too restrictive. I also used difference-in-differences designs to estimate treatment effects across competing empirical setups, testing whether conclusions remained stable under alternative identification choices and model specifications.</p>

        <p>Beyond model estimation, I built robustness workflows that compared coefficients, inference stability, and fit across specifications, making it easier to distinguish durable empirical findings from fragile ones. This was important for ensuring that downstream conclusions were not artifacts of a single modelling choice, but reflected a genuinely defensible relationship in the data.</p>{" "}

        <p>An equally important part of the role was communicating results. I produced publication-ready visualizations that converted technical output into interpretable research exhibits, helping bridge the gap between econometric analysis and the narrative demands of policy and academic writing. That meant treating presentation quality as part of the research process rather than as a cosmetic final step.</p>

        <p>Overall, the role strengthened my ability to work at the intersection of causal inference, empirical rigor, and research communication. It also built a strong foundation for future work in policy evaluation, applied econometrics, and data-driven social science research.</p>

        <p><strong>Research Note:</strong> The exact project-level outputs were produced within an academic research setting, but the methods and responsibilities described here reflect the actual econometric and empirical workflow I supported.</p>
      </div>
    ),
  },
  {
    href: "",
    title: "NITI Aayog, Economics and Finance Vertical",
    description:
      "Policy research on state fiscal performance, logistics competitiveness, and external-sector decomposition for India&apos;s principal public-policy think tank.",
    thumbnail: "/images/diagram_minor.png",
    images: [
      "/images/diagram_minor.png",
    ],
    stack: ["Public Policy", "Fiscal Analysis", "Wroclaw Taxonomy", "Economic Survey", "Applied Research"],
    slug: "niti-aayog",
    content: (
      <div>
        <p>
        This experience centered on high-stakes policy research within the Economics and Finance Vertical at NITI Aayog, where the work spanned state-level fiscal benchmarking, logistics competitiveness, and external-sector analysis. The role required moving fluidly between quantitative ranking methodology, policy writing, and macroeconomic interpretation, with outputs designed to inform public-sector decision-making rather than remain purely academic. {" "}
        </p>
        <p>
        One major project redesigned fiscal performance rankings for all 28 Indian states using Wroclaw taxonomy, replacing simpler comparative frameworks with a more rigorous multi-criteria structure. This produced a more defensible comparative ranking architecture and sharpened how cross-state performance differences were interpreted in a policy setting.
        </p>
        <p>
        I also authored a 15-page logistics benchmarking report identifying five global best practices and linking them to India&apos;s transport-cost problem. The analysis was designed not merely to summarize international examples, but to translate them into actionable policy insight, ultimately contributing to directives aimed at reducing transport costs by 9 percent.
        </p>
        <p>
        On the macro side, I performed granular trend decomposition for the External Sector chapter of Economic Survey 2024, isolating the structural drivers behind 12 percent year-over-year export growth and subjecting those findings to robustness checks. This work required distinguishing cyclical movement from deeper sectoral or compositional change, which is essential when policy conclusions are being drawn from aggregate macro data.
        </p>
      </div>
    ),
  },
  {
    href: "",
    title: "Commute Distance and Residential Characteristics: Weathering the Storm",
    description:
      "An empirical transport-economics study linking residential characteristics, infrastructure conditions, and employment structure to commute distance outcomes.",
    thumbnail: "/images/PC-1.png",
    images: [
      "/images/PC-1.png",
      "/images/PC-2.png"
    ],
    stack: ["Transport Economics", "Empirical Research", "Urban Analytics"],
    slug: "commute-weathering-storm",
    content: (
      <div>
        <p>
        This project studies how residential characteristics, infrastructure quality, and labor-market structure shape commuting outcomes in rapidly changing urban environments. Rather than treating commute distance as a purely geographic variable, the work frames it as the result of intertwined social, economic, and built-environment decisions, making it a useful lens into urban stress, inequality, and development trade-offs.
        </p>
        <p>
        The analysis examines how relocation motives, employment structure, and neighborhood-level conditions interact to influence observed commuting patterns. By structuring the question this way, the research moves beyond descriptive transport statistics and toward a richer explanation of why certain urban populations absorb greater mobility burdens than others.
        </p>
        <p>
        The paper was accepted for publication in <i>Transportation in Developing Economies</i> and presented at IMRC 2024 at IIM Ahmedabad and TPMDC 2024 at IIT Bombay. Its contribution lies in connecting transport behavior to broader questions of urban planning resilience and socio-economic vulnerability, particularly in developing-economy settings where infrastructure and labor-market transitions happen simultaneously.
        </p>
        <p>
        Overall, the project demonstrates an applied urban-economics research approach that combines empirical rigor with policy relevance. It creates a foundation for later work on mobility constraints, residential sorting, and the unequal incidence of commuting burdens across different demographic groups.
        </p>
      </div>
    ),
  },
  {
    href: "",
    title: "Limits to Commute: The Case of Indian Women",
    description:
      "A gendered mobility study using empirical transport analysis to examine how socio-economic conditions constrain commute distance for women in urban India.",
    thumbnail: "/images/WhatsApp Image 2024-06-16 at 06.54.51.jpeg",
    images: [
      "/images/WhatsApp Image 2024-06-16 at 06.54.51.jpeg",
      "/images/illustration.png",
    ],
    stack: ["Gender Economics", "Urban Mobility", "Empirical Methods", "Transport Research"],
    slug: "limits-to-commute",
    content: (
      <div>
        <p>
        This paper investigates commute distance as a gendered outcome, asking how far women are able, willing, or compelled to travel for work within the structural constraints of Indian cities. The project treats mobility not simply as a transport variable, but as a concrete expression of labor-market access, household constraints, and gendered bargaining over safety, time, and opportunity.
        </p>
        <p>
        The study builds an empirical framework for understanding why women&apos;s commuting patterns often differ sharply from those of men even within the same urban systems. By linking socio-economic determinants to observed commute outcomes, the work shows that travel distance can serve as an indirect but powerful indicator of economic inclusion and autonomy.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "",
    title: "Optimizing Urban Economic Potential Using MOORA and FUCA",
    description:
      "A multi-criteria ranking framework for city districts that combines MOORA-style decision methods with urban-economic interpretation.",
    thumbnail: "/images/illust_1.jpg",
    images: [
      "/images/illust_1.jpg",
      "/images/illust_2.png",
    ],
    stack: ["Decision Science", "Urban Economics", "Ranking Methods", "Applied Quantitative Research"],
    slug: "urban-economic-potential",
    content: (
      <div>
        <p>
        This forthcoming work develops a comprehensive ranking of city districts using MOORA and related multi-criteria evaluation techniques to identify urban-economic potential in a structured, comparative way. The project is motivated by the idea that urban development capacity cannot be captured by any single indicator; instead, it emerges from the interaction of infrastructure, economic intensity, accessibility, and locational advantage.
        </p>
        <p>
        The ranking framework synthesizes multiple dimensions into a coherent district-level ordering, allowing urban planners and policy stakeholders to identify where economic capacity is already concentrated and where latent development potential remains under-realized. By combining quantitative ranking logic with urban-economic interpretation, the project bridges methodological rigor and practical planning relevance.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "",
    title: "Planning for a Fast Metropolizing Developing Economy",
    description:
      "A research project on urban transition, planning pressure, and infrastructure strategy in rapidly expanding developing-economy contexts.",
    thumbnail: "/images/image (1).png",
    images: [
      "/images/image (1).png",
      "/images/image.png",
      "/images/plot1.png",
      "/images/WhatsApp Image 2023-11-09 at 00.42.51_d3d6b530.jpg",
      "/images/WhatsApp Image 2023-11-09 at 00.44.40_07aa976d.jpg",
    ],
    stack: ["Urban Planning", "Development Economics", "Infrastructure Strategy", "Policy Research"],
    slug: "metropolizing-economy",
    content: (
      <div>
        <p>
        This forthcoming research examines the planning challenge posed by rapid metropolitan expansion in developing economies, where urbanization, infrastructure demand, and institutional capacity rarely move at the same pace. The project is concerned with how cities absorb growth pressures and what kinds of planning strategies are required when land use, mobility systems, and public-service provision are all under simultaneous strain. {" "}
        </p>
        <p>
        The analysis approaches urban growth as a coordination problem rather than a simple engineering one. It considers how transport, residential development, and economic concentration interact over time, and why planning failures often emerge not from the absence of growth, but from the inability of public systems to accommodate it coherently. The project is especially relevant for cities experiencing fast structural transformation without the luxury of gradual adjustment.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "",
    title: "Three Person-Two Cuts Problem",
    description:
      "A mathematically rigorous fair-division study developing a maximin envy-free solution to a constrained cake-cutting problem.",
    thumbnail: "/images/Setup.png",
    images: [
      "/images/Setup.png"
    ],
    stack: ["Mathematics", "Optimization", "Fair Division"],
    slug: "three-person-two-cuts",
    content: (
      <div>
        <p>
        This project develops a solution to the Three Person-Two Cuts problem, a constrained fair-division setting that asks whether limited partitioning can still support allocations with strong fairness guarantees. The work is rooted in mathematical optimization and theoretical reasoning, treating fair division not as a heuristic exercise but as a formal allocation problem with clear solution concepts.
        </p>
        <p>
        The core contribution is a maximin envy-free algorithmic approach, formulated using linear-programming logic to identify allocations that preserve fairness under a restricted cutting structure. This makes the problem especially interesting, because the number of feasible partitions is sharply limited, yet the fairness requirement remains demanding.
        </p>{" "}
      </div>
    ),
  },
];
