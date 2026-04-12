import { ResearchItem } from "@/types/research";

export const research: ResearchItem[] = [
  {
    slug: "commute-distance-residential-characteristics",
    thumbnail: "/images/illust_1.jpg",
    images: ["/images/illust_1.jpg", "/images/image (1).png"],
    title: "Commute Distance and Residential Characteristics: Weathering the Storm",
    category: "Urban Economics and Transportation Research",
    role: "Co-Author",
    summary:
      "An empirical transportation-economics study that analyzes how residential structure, urban form, and socio-economic characteristics shape commute distances under changing environmental and infrastructural conditions, with direct implications for planning in developing cities.",
    description: null,
    descriptionHtml: `
    <section>
      <h3>Abstract</h3>
      <p>
      This research studies the interaction between commute distance, residential characteristics, and urban infrastructure in a developing-economy context, with a particular focus on how households navigate mobility frictions under changing environmental and structural conditions. The project extends conventional descriptive transport analysis by combining rigorous empirical modeling with an explicitly policy-facing framework, allowing commute behavior to be interpreted not merely as an outcome of location choice, but as a constrained response to labor-market structure, residential sorting, and infrastructure quality. The study was accepted for publication in <i>Transportation in Developing Economies</i> and presented at IMRC 2024 and TPMDC 2024.
      </p>
    </section>
    <section>
      <h3>Overview of the Work</h3>
      <p>
      Commute distance is not simply a matter of geography. It reflects a dense interaction between where people live, where they work, what transport options they can access, and what trade-offs they face across income, safety, household structure, and time. In rapidly urbanizing regions, these frictions are amplified: residential markets are segmented, infrastructure quality is uneven, and labor opportunities are often spatially mismatched. This project examines those mechanisms with a particular interest in how residential characteristics mediate the relationship between infrastructure conditions and realized commuting outcomes.
      </p>
      <p>
      The work builds on my broader transport-economics research agenda, including earlier work on gendered mobility constraints in Indian cities. Here, the central contribution was to move beyond surface correlations and develop an empirical structure capable of isolating how employment structure, reasons for relocation, and built-environment characteristics jointly influence commute distance. The result is a richer account of mobility behavior that is useful both for academic inquiry and for city-level planning strategy.
      </p>
      <p>
      Methodologically, the paper manages high-dimensional categorical structure while preserving interpretability, making it possible to quantify how household-level and neighborhood-level characteristics propagate through commuting decisions. Rather than treating commute distance as an isolated continuous endpoint, the work embeds it in a broader system of residential and economic choice, which improves both explanatory depth and policy relevance.
      </p>
    </section>
    <section>
      <h3>Methodology</h3>
      <p>
      The study combines applied econometric reasoning with multivariate structural analysis to evaluate the determinants of commute distance. A major extension of the work involved the use of partial least square-path modeling to capture how latent residential and infrastructural characteristics transmit into commuting outcomes through intermediate channels such as relocation motives and employment structure. This was particularly valuable in settings where explanatory constructs were conceptually rich but not directly measurable through a single variable.
      </p>
      <p>
      The empirical design also required careful handling of categorical inputs and urban survey-style data. Variables representing residential amenities, neighborhood traits, work profile, and household constraints were encoded and organized to preserve interpretability while allowing for robust estimation. The modeling strategy was designed not only to fit the data well, but also to produce decompositions that planners and policy researchers could translate into actionable insights.
      </p>
      <p>
      Throughout the research process, emphasis was placed on diagnostic discipline, specification clarity, and substantive interpretation. Competing formulations were evaluated to ensure that observed relationships were not artifacts of narrow modeling choices. The final framework therefore functions as both an explanatory model of commuting behavior and a policy analytics tool for understanding where transport burden originates in the urban system.
      </p>
    </section>
    <section>
      <h3>Results</h3>
      <p>
      The analysis showed that commute distances are shaped by a tightly connected system of residential location characteristics, employment structure, and relocation motives rather than by infrastructure variables in isolation. Residential context emerged as a major mediator, helping explain why similarly placed households can face meaningfully different mobility burdens. This finding is especially important for developing-city planning, where infrastructure investment alone may fail to reduce transport inequities if housing-market and labor-market frictions remain unaddressed.
      </p>
      <p>
      More broadly, the results reinforced the idea that commute distance can serve as a revealing diagnostic of urban exclusion, labor-market mismatch, and the lived quality of access. By framing commuting outcomes through a structural lens, the project generated conclusions that are stronger than conventional descriptive transport studies and more useful for long-run planning conversations.
      </p>
    </section>
    <section>
      <h3>Conclusion and Future Scope</h3>
      <p>
      This project contributes to transportation research by showing that commuting outcomes in developing cities must be studied through an integrated lens that combines residential sorting, labor structure, and infrastructural access. Future work can extend the framework into dynamic urban contexts, incorporate environmental stressors more explicitly, and connect commute-burden metrics to broader questions of welfare, gender equity, and urban productivity. The research also creates a foundation for future work linking transport frictions to macro-level congestion costs and network effects.
      </p>
    </section>
    `,
    tags: ["Transportation Economics", "Urban Analytics", "Econometrics", "Policy Research"],
    pdf: "/assets/papers/commute-distance-weathering-the-storm.pdf",
    bibtex: "@article{dittakavi2026commute, author={Dittakavi, Naga Siva Gayatri and Gosavi, Nachiket}, title={Commute Distance and Residential Characteristics: Weathering the Storm}, journal={Transportation in Developing Economies}, year={2026}, note={Accepted for publication; presented at IMRC 2024 and TPMDC 2024}}",
    authors: ["Naga Siva Gayatri Dittakavi", "Dr. Nachiket Gosavi"],
    methodology: [
      "Partial Least Square-Path Modeling for commute-distance determinants",
      "Categorical data handling for residential and employment structure variables",
      "Policy-facing interpretation of urban mobility frictions",
      "Specification diagnostics across alternative empirical formulations"
    ],
    results:
      "The study finds that commute distance is jointly shaped by residential characteristics, employment structure, and relocation motives, with residential context acting as a key mediator of transport burden and access inequality.",
    links: {
      Publication: "https://link.springer.com/",
    },
  },
  {
    slug: "limits-to-commute-indian-women",
    thumbnail: "/images/SA-4.jpeg",
    images: ["/images/SA-4.jpeg", "/images/WhatsApp Image 2024-06-16 at 06.54.51.jpeg"],
    title: "Limits to Commute: The Case of Indian Women",
    category: "Gender, Labor, and Mobility",
    role: "Co-Author",
    summary:
      "A gender-focused mobility study that uses stratified econometric analysis to investigate how socio-economic constraints shape commute-distance choices for women, positioning mobility as a measurable dimension of economic agency and urban inclusion.",
    description: null,
    descriptionHtml: `
    <section>
      <h3>Abstract</h3>
      <p>
      This paper examines women&apos;s commute behavior through the lens of socio-economic constraint, labor-market access, and urban form. Rather than treating mobility as a neutral transport outcome, the study frames commute distance as an informative proxy for economic participation, bargaining power, and spatial access. Using stratified logistic regression, the paper evaluates how household and socio-economic characteristics condition the commuting radius of women in India, revealing the structural nature of mobility inequality.
      </p>
    </section>
    <section>
      <h3>Overview of the Work</h3>
      <p>
      In many developing urban contexts, women&apos;s mobility is shaped by much more than transport availability. Safety perceptions, household responsibilities, income constraints, and occupational sorting can all narrow the feasible geography of work. This project was motivated by the idea that commute distance itself can be treated as a measurable outcome of these layered constraints. When women systematically commute less far than men, that pattern may reflect not preference alone but structural limits on access to opportunity.
      </p>
      <p>
      The paper therefore asks a deeper question than whether women commute shorter distances. It investigates which socio-economic variables are most strongly associated with constrained mobility and how those relationships vary across population segments. By doing so, it turns commute distance into a tool for studying gender inequality in urban labor access.
      </p>
    </section>
    <section>
      <h3>Methodology</h3>
      <p>
      The empirical strategy relies on stratified logistic regression to model the likelihood of different commute-distance outcomes across socio-economic groups. This framework was chosen because it preserves interpretability while allowing heterogeneous effects to be studied systematically. Variables representing income, household structure, employment profile, and related socio-economic conditions were incorporated to isolate how constraint patterns differ across groups rather than averaging them away.
      </p>
      <p>
      The analytical emphasis throughout was on translating econometric output into substantive urban and labor-market interpretation. Rather than presenting mobility solely as a transport variable, the paper interprets estimated coefficients as evidence on access, restriction, and the effective geography of opportunity facing women in the city.
      </p>
    </section>
    <section>
      <h3>Results</h3>
      <p>
      The findings indicate that women&apos;s commute distances are strongly conditioned by socio-economic and household variables, reinforcing the view that mobility is inseparable from broader social structure. The results support the interpretation of constrained commute distance as a practical indicator of diminished labor-market reach. In policy terms, this suggests that improving gender equity in urban employment requires interventions that go beyond transportation supply and address the household and institutional constraints that narrow women&apos;s mobility choices.
      </p>
    </section>
    <section>
      <h3>Conclusion</h3>
      <p>
      By treating commute distance as a gendered economic variable rather than a narrow transport statistic, this work contributes to the study of urban inequality and labor access. Future extensions could integrate richer safety variables, temporal work patterns, and neighborhood-level infrastructure measures to sharpen the analysis further. The broader research agenda remains centered on understanding mobility as a foundation of economic inclusion.
      </p>
    </section>
    `,
    tags: ["Gender Economics", "Transportation Research", "Logistic Regression", "Urban Inequality"],
    pdf: "/assets/papers/limits-to-commute.pdf",
    bibtex: "@incollection{dittakavi2024limits, author={Dittakavi, Naga Siva Gayatri and Gosavi, Nachiket}, title={Limits to Commute: The Case of Indian Women}, booktitle={Lecture Notes in Civil Engineering}, publisher={Springer Nature Singapore}, year={2024}}",
    authors: ["Naga Siva Gayatri Dittakavi", "Dr. Nachiket Gosavi"],
    methodology: [
      "Stratified logistic regression for gendered commute-distance analysis",
      "Socio-economic segmentation of mobility outcomes",
      "Interpretation of mobility as labor-market access",
      "Urban inequality analysis through transport metrics"
    ],
    results:
      "The study shows that women's commute distances are materially shaped by socio-economic and household constraints, supporting the use of commute distance as an empirical indicator of gendered access to labor-market opportunity.",
  },
  {
    slug: "urban-economic-potential-moora-fuca",
    thumbnail: "/images/diagram_minor.png",
    images: ["/images/diagram_minor.png", "/images/Setup.png"],
    title: "Optimizing Urban Economic Potential: A Comprehensive Ranking of City Districts Using MOORA and FUCA Techniques",
    category: "Urban Systems and Decision Analytics",
    role: "Co-Author",
    summary:
      "A multi-criteria decision framework that ranks city districts by economic potential using MOORA and FUCA techniques, translating complex urban indicators into a structured optimization and policy-prioritization tool.",
    description: null,
    descriptionHtml: `
    <section>
      <h3>Abstract</h3>
      <p>
      This project develops a comprehensive district-ranking framework for evaluating urban economic potential using multi-criteria decision methods. By combining MOORA and FUCA techniques, the study transforms heterogeneous urban indicators into a coherent comparative ranking system that can be used for planning, resource prioritization, and strategic development assessment. The work was accepted for publication with Taylor &amp; Francis.
      </p>
    </section>
    <section>
      <h3>Overview of the Work</h3>
      <p>
      Cities contain sharp internal variation in infrastructure, accessibility, economic intensity, and development potential. Yet planning decisions often rely on fragmented indicators or descriptive dashboards that do not provide a unified ranking logic. This project addresses that gap by constructing a structured urban evaluation framework capable of synthesizing multiple dimensions of district performance into a single interpretable ranking.
      </p>
      <p>
      The aim was not merely to rank districts, but to do so in a way that preserved analytical rigor and planning usefulness. Multi-criteria ranking methods are especially valuable in urban contexts because they allow economic potential to be evaluated across competing dimensions rather than through one narrow metric. This makes the framework suitable for strategic planning, investment prioritization, and comparative development assessment.
      </p>
    </section>
    <section>
      <h3>Methodology</h3>
      <p>
      The analytical core of the paper combines MOORA and FUCA techniques to evaluate city districts across multiple decision criteria. These methods were selected because they provide a disciplined approach to ranking when indicators differ in scale, direction, and relative importance. The framework standardizes inputs, evaluates trade-offs across criteria, and produces a final ranking that is both tractable and policy-facing.
      </p>
      <p>
      A key contribution of the study lies in translating complex urban-economic data into a ranked decision architecture. Instead of producing a descriptive profile for each district, the methodology yields an ordered assessment that planners can use to identify priority zones, development asymmetries, and areas of latent potential. The work therefore sits at the intersection of urban analytics, optimization logic, and public-policy design.
      </p>
    </section>
    <section>
      <h3>Results</h3>
      <p>
      The ranking framework generated a structured ordering of districts that surfaced non-obvious differences in development potential. Because the methodology integrates multiple dimensions at once, it was able to distinguish between districts that perform well on headline indicators and those that exhibit stronger underlying multi-dimensional potential. This makes the ranking system more strategically informative than simple one-variable comparisons.
      </p>
    </section>
    <section>
      <h3>Conclusion</h3>
      <p>
      This work demonstrates how multi-criteria decision methods can be adapted for urban economic analysis in a way that is rigorous, interpretable, and directly useful for planning. Future extensions may incorporate dynamic indicators, temporal change, and sensitivity testing under alternative weighting schemes. More broadly, the project shows how formal ranking methods can strengthen evidence-based urban policy.
      </p>
    </section>
    `,
    tags: ["Urban Analytics", "MOORA", "Decision Science", "Policy Optimization"],
    pdf: "/assets/papers/urban-economic-potential.pdf",
    bibtex: "@article{dittakavi2026urban, author={Dittakavi, Naga Siva Gayatri and Singh, Yograj}, title={Optimizing Urban Economic Potential: A Comprehensive Ranking of City Districts Using MOORA and FUCA Techniques}, journal={Taylor & Francis}, year={2026}, note={Accepted for publication}}",
    authors: ["Naga Siva Gayatri Dittakavi", "Dr. Yograj Singh"],
    methodology: [
      "MOORA-based multi-criteria district ranking",
      "FUCA techniques for structured comparative evaluation",
      "Urban indicator normalization and prioritization",
      "Policy-oriented economic potential assessment"
    ],
    results:
      "The framework produces a robust district-level ranking of urban economic potential, enabling planners to identify priority areas and hidden development asymmetries across multiple dimensions of city performance.",
    links: {
      Publication: "https://www.tandfonline.com/",
    },
  },
  {
    slug: "industrial-sector-equity-screening-valuation",
    thumbnail: "/images/PC-1.png",
    images: ["/images/PC-1.png", "/images/IOV_2.png"],
    title: "Industrial Sector Equity Screening and Valuation Model",
    category: "Equity Research and Financial Modeling",
    role: "Independent Researcher",
    summary:
      "A sell-side-style equity research framework that screens industrial companies and builds integrated valuation views using 3-statement modeling, DCF analysis, EV/EBITDA comparables, and macro-sensitive forecast drivers.",
    description: null,
    descriptionHtml: `
    <section>
      <h3>Abstract</h3>
      <p>
        This project develops a sector-focused equity screening and valuation framework for industrial companies, combining accounting-based modeling with macro-sensitive forecasting logic. Built in the style of institutional research workflows, the model integrates 3-statement forecasting, discounted cash flow valuation, and comparable-company analysis to generate structured buy, hold, and sell conclusions with clear attribution.
      </p>
    </section>
    <section>
      <h3>Overview of the Work</h3>
      <p>The industrial sector is especially sensitive to capex cycles, purchasing manager expectations, financing conditions, and margin discipline. This project was designed to replicate the analytical discipline of a sell-side research process while preserving the flexibility of an independent research pipeline. Rather than valuing firms through a single static framework, the project evaluates how operational and macro drivers feed into earnings power, cash generation, and relative valuation.</p>
      <p>The system screens industrial names and then builds integrated modeling views across income statement, balance sheet, and cash flow dynamics. This allows forecast assumptions to flow coherently through the capital structure rather than remaining trapped in isolated spreadsheet tabs. The result is a research product that is much closer to a professional equity note than to an academic classroom valuation exercise.</p>
      <p>Macro inputs including PMI data, capex trends, and rate-cycle indicators were incorporated as forecast drivers to better align bottom-up modeling with the broader industrial cycle. This gave the framework a more market-relevant structure and allowed valuation conclusions to be linked to identifiable catalysts and scenario changes.</p>
    </section>
    <section>
      <h3>Methodology</h3>
      <p>The model combines integrated 3-statement forecasting with two principal valuation engines: DCF and EV/EBITDA comparable analysis. Historical operating and balance-sheet behavior were used to calibrate core assumptions, while peer benchmarking anchored the relative valuation side of the framework. Forecasts were then stress-checked against macro and industry drivers to ensure the outputs were economically coherent rather than mechanically extrapolated.</p>
      <p>In addition to valuation outputs, the project includes full peer comparison, investment-summary construction, and attribution logic explaining where upside or downside comes from. This makes the framework suitable not only for computing valuation ranges, but also for communicating them in a way that mirrors institutional research standards.</p>
    </section>
    <section>
      <h3>Results and Discussion</h3>
      <p>The project produced a structured research workflow capable of ranking industrial names on both absolute and relative value. Because forecast assumptions are linked to identifiable macro and sector variables, the resulting investment conclusions are more transparent and easier to revise under changing conditions. This is particularly important in cyclical sectors, where valuation without macro context often becomes fragile or misleading.</p>
      <p>More broadly, the work demonstrates the ability to bridge accounting mechanics, valuation logic, and market narrative. That integration is central to high-quality research work, where the strength of a view depends not only on the model, but on the coherence between numbers, catalysts, and industry structure.</p>
    </section>
    <section>
    <h3>Future Work &amp; Conclusion</h3>
    <p>This framework can be extended through scenario libraries tied to industrial recession risk, margin compression, reshoring themes, and capex supercycle narratives. Additional work could include factor-based relative screening, earnings-revision sensitivity, and event-driven catalyst monitoring. In its current form, however, the project already functions as a strong institutional-style equity research engine with clear analytical lineage from assumptions to recommendation.</p>
    </section>
    `,
    tags: ["Equity Research", "DCF Valuation", "3-Statement Modeling", "Industrials"],
    pdf: "/assets/papers/industrial-equity-screening.pdf",
    bibtex: "@misc{dittakavi2026industrials, author={Dittakavi, Naga Siva Gayatri}, title={Industrial Sector Equity Screening and Valuation Model}, year={2026}, note={Independent research project}}",
    authors: ["Naga Siva Gayatri Dittakavi"],
    methodology: [
      "Integrated 3-statement financial modeling in Excel and Python",
      "DCF and EV/EBITDA comparable-company valuation",
      "Macro-sensitive forecasting using PMI, capex, and rate-cycle indicators",
      "Peer benchmarking and valuation-attribution analysis"
    ],
    results:
      "The framework produces institutional-style investment summaries by linking industrial-sector valuation to both company fundamentals and macro-cycle drivers, enabling transparent buy, hold, and sell conclusions.",
    links: {
      Repository: "https://github.com/",
    },
  },
];
