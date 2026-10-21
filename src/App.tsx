import { motion } from 'framer-motion';
import React, { useState } from 'react';
import {
  Globe,
  Cpu,
  Activity,
  Linkedin,
  Github,
  Mail,
  Twitter,
  ContactRound,
  Search,
  Database,
  Layers,
  MapPin,
  Camera,
  Satellite,
  GraduationCap,
  BookOpen,
  Award,
  Users,
  Target,
  Briefcase
} from 'lucide-react';
import './App.css';

// Pre-generated static "random" nodes to satisfy purity rules
const STATIC_NODES = [
  { x: 120, y: 450, delay: 1.2 }, { x: 680, y: 120, delay: 0.5 },
  { x: 340, y: 560, delay: 2.1 }, { x: 50, y: 80, delay: 3.4 },
  { x: 740, y: 510, delay: 0.8 }, { x: 210, y: 230, delay: 4.2 },
  { x: 550, y: 380, delay: 1.7 }, { x: 420, y: 40, delay: 2.6 },
  { x: 30, y: 580, delay: 0.1 }, { x: 790, y: 150, delay: 3.9 },
  { x: 300, y: 200, delay: 1.5 }, { x: 600, y: 450, delay: 2.8 },
  { x: 150, y: 300, delay: 0.3 }, { x: 480, y: 520, delay: 4.5 },
  { x: 350, y: 350, delay: 2.2 }, { x: 220, y: 100, delay: 1.1 },
  { x: 700, y: 300, delay: 3.3 }, { x: 500, y: 150, delay: 0.7 },
  { x: 100, y: 120, delay: 4.8 }, { x: 650, y: 550, delay: 1.4 }
];

const NodeMap = () => {
  return (
    <div className="node-map-container">
      <svg className="node-svg" viewBox="0 0 800 600">
        {STATIC_NODES.map((node, i) => (
          <React.Fragment key={i}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="2"
              fill="var(--accent-hyper)"
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + node.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </React.Fragment>
        ))}
      </svg>
    </div>
  );
};

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDevTab, setActiveDevTab] = useState('conferences');
  const [activePubType, setActivePubType] = useState('All');

  const scholarUrl = "https://scholar.google.com/citations?user=9rHfgD4AAAAJ";
  const researchGateUrl = "https://www.researchgate.net/profile/Akib-Javed";

  const milestones = [
    {
      year: "2026",
      title: "Directing Geospatial Research for Water Resilience",
      org: "Hydrology & Geoinformatics Specialist, C4RE",
      description: "Directing geospatial research and technical frameworks for evidence-based hydrological project roadmaps. Also serving on UNDP GEF-LDCF (Kiribati coastal hazard risk) and World Bank KOIRAP (climate-resilient urban policy) engagements, plus founding Maplicon consultancy.",
      reflection: "From national land zoning to cross-border hydrological resilience — geospatial intelligence now drives international development policy."
    },
    {
      year: "2025",
      title: "Orchestrating National Spatial Assets",
      org: "GIS Analyst & Supervisor, IWM & CPE",
      description: "Georeferencing and digitizing centuries-old cadastral maps for a national land zoning project, leading a team of 3 analysts and cutting manual processing time by 20%.",
      reflection: "Transitioning from theoretical research to large-scale operational geospatial management."
    },
    {
      year: "2017 - 2024",
      title: "The LIESMARS Doctorate",
      org: "Ph.D., Wuhan University (LIESMARS)",
      description: "CSC Scholar at the State Key Laboratory of Information Engineering in Surveying, Mapping, and Remote Sensing.",
      reflection: "Where GeoAI meet precision cartography. My focus shifted towards deep learning architectures for urban impervious surface mapping."
    },
    {
      year: "2015",
      title: "Laying the Geographic Foundation",
      org: "M.S. in Geography, University of Rajshahi",
      description: "Mastering land use change analysis in Teknaf, identifying deforestation trends for 50,000+ residents.",
      reflection: "My first realization of how spatial data can influence policy and community survival."
    }
  ];

  const conferences = [
    { title: "2024 International Symposium on Spatio-Temporal Intelligence", org: "LIESMARS, Wuhan University", date: "Nov 2024" },
    { title: "International Conference on Geospatial Information Science", org: "LIESMARS", date: "Oct 2023" },
    { title: "International Conference on Advance Remote Sensing 2018", org: "LIESMARS", date: "Oct 2018" },
    { title: "International Symposium on Video Surveillance and Intelligent Analysis", org: "Zhuhai City Development Authority", date: "Dec 2017" },
    { title: "International Conference on Geography Education 2015", org: "University of Rajshahi & University of Freiburg", date: "Sep 2015" },
    { title: "International Conference on Environment and Development", org: "University of Rajshahi (HEQEP)", date: "Mar 2014" }
  ];

  const workshops = [
    { title: "Zhuhai One Hyperspectral Remote Sensing Training", org: "ORBITA Aerospace Science & Technology", date: "2019", duration: "10 days" },
    { title: "1st LIESMARS International Graduate Workshop on GeoInformatics", org: "LIESMARS, Wuhan University", date: "2017", duration: "3 days" },
    { title: "Teaching Method and Curriculum Development", org: "University of Freiburg & University of Rajshahi", date: "2014", duration: "3 days" },
    { title: "Innovative Teaching Methodology, Learning Strategies and Didactics", org: "University of Freiburg & Rajshahi", date: "2013", duration: "3 days" }
  ];

  const trainings = [
    { title: "Application of Mathematical Modelling & GIS Technology", org: "Institute of Water Modelling (IWM)", date: "Sep-Oct 2024", focus: "Water Development Projects" },
    { title: "2024 Luojia Global Summer School", org: "Wuhan University", date: "Jun 2024", focus: "Social Sensing & Big Data Computing" },
    { title: "2023 International Geo-Informatics Summer School", org: "LIESMARS", date: "Jul 2023", focus: "Computer Vision & Digital Image Processing" },
    { title: "2019 Geo-Informatics Summer School", org: "LIESMARS & Geospatial Technology Center", date: "Jul 2019", focus: "Microwave Remote Sensing" },
    { title: "Statistical Computing Certificate Course", org: "University of Rajshahi", date: "2014", focus: "MS Excel, SPSS and R Programming" }
  ];

  const certifications = [
    { title: "Advanced Prompt Engineering Techniques", platform: "LinkedIn", year: "2026" },
    { title: "How to Be an Agent Boss: Leading AI Agents at Work", platform: "LinkedIn", year: "2026" },
    { title: "How to Learn a New Topic Quickly", platform: "LinkedIn", year: "2026" },
    { title: "Power BI: Dashboards for Beginners", platform: "LinkedIn", year: "2026" },
    { title: "Foundations of Geographic Information Systems (GIS)", platform: "LinkedIn", year: "2026" },
    { title: "AI Python for Beginners", platform: "DeepLearning.AI", year: "2024" },
    { title: "Practical Project Management (PMI, PMP, APM)", platform: "Udemy", year: "2025" },
    { title: "Introduction to Career Skills in Software Development", platform: "LinkedIn", year: "2025" },
    { title: "Programming Foundations: Beyond the Fundamentals", platform: "LinkedIn", year: "2025" },
    { title: "Microsoft Copilot: The Art of Prompt Writing", platform: "LinkedIn", year: "2025" },
    { title: "Programming Foundations: Fundamentals", platform: "LinkedIn", year: "2025" },
    { title: "Learning Data Analytics: Foundations", platform: "LinkedIn", year: "2022" },
    { title: "Communication Foundations", platform: "LinkedIn", year: "2022" },
    { title: "Good Citation Behavior", platform: "Clarivate", year: "2022" },
    { title: "Data Science for Everyone", platform: "DataCamp", year: "2022" },
    { title: "Intermediate Python", platform: "DataCamp", year: "2022" },
    { title: "Introduction to Python", platform: "DataCamp", year: "2022" },
    { title: "Learning Excel: Data Analysis", platform: "LinkedIn", year: "2022" },
    { title: "Writing in the Sciences", platform: "Coursera", year: "2022" },
    { title: "Reviewing in the Sciences", platform: "Clarivate", year: "2022" }
  ];

  const leadershipRoles = [
    {
      org: "English GeoScience Cafe (EGSC)",
      institution: "LIESMARS, Wuhan University",
      roles: [
        { position: "Editorial Member", period: "2023–2024", responsibility: "Managed academic content delivery and edited research communications" },
        { position: "Vice Director", period: "2017–2018", responsibility: "Organized international seminars, conferences, and coordinated field trips" }
      ]
    },
    {
      org: "Space & Environment Research Center (SERC)",
      institution: "Co-founder",
      roles: [
        { position: "General Secretary", period: "2014–2015", responsibility: "Founded research center and organized national conference on disaster management" }
      ]
    },
    {
      org: "Rajshahi University Press Club (RUPC)",
      institution: "University of Rajshahi",
      roles: [
        { position: "Elected Treasurer", period: "2012–2014", responsibility: "Managed finances and organizational operations" },
        { position: "Senior Executive Member", period: "2014–2015", responsibility: "Strategic planning and community outreach" }
      ]
    },
    {
      org: "Rajshahi University Alumni Association (RUAA)",
      institution: "University of Rajshahi",
      roles: [
        { position: "Life Member", period: "2025–Present", responsibility: "Active engagement in alumni networking and mentorship" }
      ]
    }
  ];

  const projects = [
    {
      id: "national-zoning",
      title: "National Land Zoning Project",
      role: "GIS Supervisor",
      location: "Bangladesh",
      challenge: "Manual processing of centuries-old cadastral maps was slow and error-prone, delaying critical land management initiatives.",
      methodology: "Implemented a semi-automated pipeline using advanced georeferencing and digitization workflows, leading a team of specialized analysts.",
      impact: "10% improvement in manual processing speed; ensured 95% accuracy in spatial data outputs for national land zoning.",
      metric: "10% Efficiency Gain",
      icon: <Database size={24} />
    },
    {
      id: "impervious-mapping",
      title: "GeoAI Impervious Surface Mapping",
      role: "Lead Researcher",
      location: "Global Alpha Cities",
      challenge: "Traditional mapping methods struggle with spectral confusion in dense urban environments, leading to inaccurate runoff modeling.",
      methodology: "Developed novel spectral indices (GISAI, NSAI) and applied deep learning (XGBoost, Neural Networks) to Optical-SAR data fusion.",
      impact: "Created the most accurate automatic megacity mapping index of its time, published in top-tier journals.",
      metric: "Top-Tier Innovation",
      icon: <Layers size={24} />
    }
  ];

  const expeditions = [
    {
      title: "UAV Photogrammetry Survey",
      site: "Guangzhou, China",
      tools: "Hi-TARGET UAV, RTK GPS",
      description: "Participated in high-precision field data acquisition using advanced geospatial sensors. Familiarized with latest geospatial tools.",
      icon: <Camera size={24} />
    },
    {
      title: "Industrial Socioeconomic Survey",
      site: "Kushtia, Bangladesh",
      tools: "Digital Mapping, Field Data Collection",
      description: "Authored field reports for major factories, providing critical data for regional economic planning.",
      icon: <MapPin size={24} />
    },
    {
      title: "SAR & Optical Data Fusion Site",
      site: "Wuhan (Multi-City Analysis)",
      tools: "Advanced Image Processing, GEE",
      description: "Bridging the gap between active and passive remote sensing for urban impervious surface extraction.",
      icon: <Satellite size={24} />
    }
  ];

  const impacts = [
    {
      label: "Research Reach",
      value: "45",
      detail: "Scientific Publications & Items",
      icon: <Globe size={24} />
    },
    {
      label: "Book Chapters",
      value: "3",
      detail: "Published in Elsevier & Springer",
      icon: <BookOpen size={24} />
    },
    {
      label: "Conferences",
      value: "6",
      detail: "International conferences attended",
      icon: <Users size={24} />
    },
    {
      label: "Workshops",
      value: "4",
      detail: "Specialized technical workshops",
      icon: <Briefcase size={24} />
    },
    {
      label: "Training Programs",
      value: "5",
      detail: "Advanced summer schools & courses",
      icon: <GraduationCap size={24} />
    },
    {
      label: "Certifications",
      value: "20",
      detail: "Professional development courses",
      icon: <Award size={24} />
    },
    {
      label: "Research Posters",
      value: "2",
      detail: "Presented at international conferences",
      icon: <Target size={24} />
    },
    {
      label: "Community Reach",
      value: "50k+",
      detail: "Residents supported via policy research",
      icon: <Activity size={24} />
    },
    {
      label: "Model Precision",
      value: "95%",
      detail: "Spatial data output pipeline success",
      icon: <Cpu size={24} />
    }
  ];

  const publications = [
    { title: "Advancements in deep learning methods for precise weed and rice classification from UAV imagery: a comprehensive review", journal: "Discover Agriculture 4.1", year: "2026", cluster: "Journal" },
    { title: "DTSM: A UAV-based framework for temporal rice stress detection and growth analysis", journal: "Smart Agricultural Technology", year: "2026", cluster: "Journal" },
    { title: "Physicochemical, heavy metal, and microbial risk assessment of harvested rainwater in coastal Koyra Upazila, Bangladesh", journal: "Journal of Water, Sanitation and Hygiene for Development", year: "2026", cluster: "Journal" },
    { title: "Assessment of particulate matter exposure and associated human health risk: Comparison among non-automated, automated and semi-automated rice industry workers", journal: "Journal of Industrial Safety", year: "2026", cluster: "Journal" },
    { title: "Spatial assessment of lead contamination, essential nutrient status, and ecological and human-health risks in agricultural soils surrounding a used lead-acid battery recycling site in Bangladesh", journal: "Total Environment Advances", year: "2026", cluster: "Journal" },
    { title: "Enhanced urban impervious surface land use mapping using a novel multi-sensor feature fusion method and remote sensing data", journal: "Environmental Earth Sciences 84.9", year: "2025", cluster: "Journal" },
    { title: "Drainage Network Generation for Urban Pluvial Flooding (UPF) Using Generative Adversarial Networks (GANs) and GIS Data", journal: "Sustainability 10", year: "2025", cluster: "Journal" },
    { title: "Comparative Hydrogeochemical Characterization and Environmental Controls on Groundwater Quality, Irrigation Suitability, and Health Risk across Northern and Coastal Hydrological Settings of Bangladesh", journal: "Cleaner Water", year: "2026", cluster: "Journal" },
    { title: "Geostatistical modeling of soil physicochemical properties and environmental drivers in agro-industrial landuse systems in Bangladesh", journal: "Geomatica 77.2", year: "2025", cluster: "Journal" },
    { title: "Optical-SAR Data Fusion Based on Simple Layer Stacking and the XGBoost Algorithm to Extract Urban Impervious Surfaces in Global Alpha Cities", journal: "Remote Sensing 16.5", year: "2024", cluster: "Journal" },
    { title: "A novel ensemble learning approach to extract urban impervious surface based on machine learning algorithms using SAR and optical data", journal: "International Journal of Applied Earth Observation and Geoinformation 132", year: "2024", cluster: "Journal" },
    { title: "Changes monitoring in Hongjiannao Lake from 1987 to 2023 using Google Earth Engine and analysis of climatic and anthropogenic forces", journal: "Physics and Chemistry of the Earth, Parts A/B/C 136", year: "2024", cluster: "Journal" },
    { title: "Development of Soil-Suppressed Impervious Surface Area Index for Automatic Urban Mapping", journal: "Photogrammetric Engineering & Remote Sensing 90.1", year: "2024", cluster: "Journal" },
    { title: "Comparison of Random Forest and XGBoost Classifiers Using Integrated Optical and SAR Features for Mapping Urban Impervious Surface", journal: "Remote Sensing 16.4", year: "2024", cluster: "Journal" },
    { title: "Modelling land use/land cover (LULC) change dynamics, future prospects, and its environmental impacts based on geospatial data models and remote sensing data", journal: "Environmental Science and Pollution Research 30.12", year: "2023", cluster: "Journal" },
    { title: "Mapping impervious surface area increase and urban pluvial ﬂooding using Sentinel Application Platform (SNAP) and remote sensing data", journal: "Environmental Science and Pollution Research 30.60", year: "2023", cluster: "Journal" },
    { title: "The Cellular Automata Approach in Dynamic Modelling of Land Use Change Detection and Future Simulations Based on Remote Sensing Data in Lahore Pakistan", journal: "Photogrammetric Engineering & Remote Sensing 89.1", year: "2023", cluster: "Journal" },
    { title: "Environmental impact assessment of tobacco farming in northern Bangladesh", journal: "Heliyon 9.3", year: "2023", cluster: "Journal" },
    { title: "Development of normalized soil area index for urban studies using remote sensing data", journal: "Geofizika 40.1", year: "2023", cluster: "Journal" },
    { title: "Expansion of Urban Impervious Surfaces in Lahore (1993-2022) Based on GEE and Remote Sensing Data", journal: "Photogrammetric Engineering and Remote Sensing 89.8", year: "2023", cluster: "Journal" },
    { title: "The Simulation and Prediction of Land Surface Temperature Based on SCP and CA-ANN Models Using Remote Sensing Data: A Case Study of Lahore", journal: "Photogrammetric Engineering and Remote Sensing 88.12", year: "2022", cluster: "Journal" },
    { title: "Comparative occupational health risk between tobacco and paddy farming people in Bangladesh", journal: "SSM-Mental Health 2", year: "2022", cluster: "Journal" },
    { title: "Review of Spectral Indices for Urban Remote Sensing", journal: "Photogrammetric Engineering and Remote Sensing 87.7", year: "2021", cluster: "Journal" },
    { title: "Assessing vulnerability for inhabitants of Dhaka City considering ﬂood-hazard exposure", journal: "Geofizika 37.2", year: "2020", cluster: "Journal" },
    { title: "Parameters Derived from and/or Used with Digital Elevation Models (DEMs) for Landslide Susceptibility Mapping and Landslide Risk Assessment: A Review", journal: "ISPRS International Journal of Geo-Information 8.12", year: "2019", cluster: "Journal" },
    { title: "Advancements in remote sensing and GIS for water resource management and SDG monitoring", journal: "Utilizing Earth Observation Data in Reaching Sustainable Development Goals", year: "2026", cluster: "Book Chapter" },
    { title: "Measuring Vulnerability to Flash Flood of Urban Dwellers", journal: "Wadi Flash Floods", year: "2022", cluster: "Book Chapter" },
    { title: "Measuring Vulnerability to Environmental Hazards: Qualitative to Quantitative", journal: "Environment, Climate, Plant and Vegetation Growth", year: "2020", cluster: "Book Chapter" },
    { title: "A Comprehensive Evaluation of Environmental Literacy: A Case Study in Kushtia Municipality, Bangladesh", journal: "ABSTRACTS BOOK OF FIRST INTERNATIONAL CONFERENCE ON BANGLADESH STUDIES (ICBS-I)", year: "2025", cluster: "Conference Proc" },
    { title: "A Comprehensive Evaluation of Environmental Literacy: A Case Study in Kushtia Municipality, Bangladesh", journal: "Conference Proceedings on 1st International Conference on Bangladesh Studies (ICBS-I)", year: "2025", cluster: "Conference Proc" },
    { title: "Agricultural Drought in Northern Bangladesh: A Spatiotemporal Analysis Using MODIS Time Series From 2001 To 2023", journal: "ABSTRACTS BOOK OF FIRST INTERNATIONAL CONFERENCE ON BANGLADESH STUDIES (ICBS-I)", year: "2025", cluster: "Conference Proc" },
    { title: "From Resource to Risk: Evaluating the Rainwater Quality and Associated Health Issues in the Southern Coastal Bangladesh", journal: "Conference Proceedings on 10th International Conference on Water and Flood Management - ICWFM", year: "2025", cluster: "Conference Proc" },
    { title: "Assessment of Particulate Matter Exposure and Associated Human Health Risk: Comparison among Non-automated, Automated and Semi-automated Rice Processing Industry Workers in Bangladesh", journal: "Proceedings of the 1st International Conference on Geosciences for Achieving Sustainable Development Goals (ICGSDG-", year: "2025", cluster: "Conference Proc" },
    { title: "A Remote Sensing Assessment of Air Pollution in Five Bangladeshi Industrial Cities", journal: "INTERNATIONAL GLOBAL SUSTAINABILITY AND DEVELOPMENT CONGRESS Full Text Book. Ed. by Oktay Özkan and Şükrü Taner Azgin. New York", year: "2025", cluster: "Conference Proc" },
    { title: "A Remote Sensing Assessment of Air Pollution in Five Bangladeshi Industrial Cities", journal: "Global Sustainability and Development Congress Abstract Book. Ed. by Oktay Özkan and Şükrü Taner Azgın. Kayseri", year: "2025", cluster: "Conference Proc" },
    { title: "An Analysis of Governance Framework Effectiveness and Internal Waste Management Practices in The Hospitals of Rangpur Sadar Upazila, Bangladesh", journal: "ABSTRACTS BOOK OF FIRST INTERNATIONAL CONFERENCE ON BANGLADESH STUDIES (ICBS-I)", year: "2025", cluster: "Conference Proc" },
    { title: "An Analysis of Governance Framework Effectiveness and Internal Waste Management Practices in the Hospitals of Rangpur Sadar Upazila, Bangladesh", journal: "Conference Proceedings on 1st International Conference on Bangladesh Studies (ICBS-I)", year: "2025", cluster: "Conference Proc" },
    { title: "Index-based Assessment of Groundwater Quality and Suitability for Irrigation Across Major Agricultural Regions of Bangladesh", journal: "Proceedings of the 1st International Conference on Geosciences for Achieving Sustainable Development Goals (ICGSDG-", year: "2025", cluster: "Conference Proc" },
    { title: "Measuring Vulnerability to Flash Flood for Urban Inhabitants: A Case Study of Dhaka Megacity, Bangladesh", journal: "The Fifth International Symposium on Flash Floods in Wadi Systems (ISFF", year: "2020", cluster: "Conference Proc" },
    { title: "Measuring vulnerability for city dwellers exposed to ﬂood hazard: A case study of Dhaka City, Bangladesh", journal: "Urban Intelligence and Applications: Proceedings of ICUIA 201y. Springer International Publishing", year: "2019", cluster: "Conference Proc" },
    { title: "Life cycle energy and cost analysis of small scale biogas plant and solar PV system in rural areas of Bangladesh", journal: "2nd International Conference on Energy and Power", year: "2018", cluster: "Conference Proc" },
    { title: "Smart Application using GNSS, GIS and Remote Sensing: Flood Prediction and Monitoring", journal: "First International Workshop on Artificial Intelligence and Big Data Analysis", year: "2017", cluster: "Conference Proc" },
    { title: "Philosophy of Geography Education: Some Perspectives and Progress in Bangladesh Context", journal: "International Conference on Geography Education", year: "2015", cluster: "Conference Proc" }
  ].filter(pub =>
    (activePubType === 'All' || pub.cluster === activePubType) &&
    pub.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderDevContent = () => {
    switch (activeDevTab) {
      case 'conferences':
        return (
          <div className="dev-grid">
            {conferences.map((conf, i) => (
              <motion.div
                key={i}
                className="dev-item"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <h4 className="dev-item-title">{conf.title}</h4>
                <p className="dev-item-org">{conf.org}</p>
                <span className="dev-item-date">{conf.date}</span>
              </motion.div>
            ))}
          </div>
        );
      case 'workshops':
        return (
          <div className="dev-grid">
            {workshops.map((workshop, i) => (
              <motion.div
                key={i}
                className="dev-item"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <h4 className="dev-item-title">{workshop.title}</h4>
                <p className="dev-item-org">{workshop.org}</p>
                <span className="dev-item-date">{workshop.date} • {workshop.duration}</span>
              </motion.div>
            ))}
          </div>
        );
      case 'training':
        return (
          <div className="dev-grid">
            {trainings.map((training, i) => (
              <motion.div
                key={i}
                className="dev-item"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <h4 className="dev-item-title">{training.title}</h4>
                <p className="dev-item-org">{training.org}</p>
                <span className="dev-item-date">{training.date}</span>
                {training.focus && <p style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Focus: {training.focus}</p>}
              </motion.div>
            ))}
          </div>
        );
      case 'certifications':
        return (
          <div className="dev-grid">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                className="dev-item"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <h4 className="dev-item-title">{cert.title}</h4>
                <span className="cert-platform">{cert.platform}</span>
                <span className="dev-item-date" style={{ display: 'block', marginTop: '0.75rem' }}>{cert.year}</span>
              </motion.div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="narrative-container">
      <NodeMap />

      {/* 01. Hero Phase */}
      <section className="hero-narrative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mono-label hero-mono">Researcher Profile_v2026</div>
          <h1 className="main-title">akib javed, ph.d.</h1>
          <p className="hero-reflection">
            Exploring the hidden patterns of our planet. <br />
            I bridge the gap between <b>Geospatial Intelligence</b> and <b>Deep Learning</b>
            to solve urban pluvial flooding, deforestation, and resource scarcity.
          </p>
          <div className="badge-group hero-badge-group">
            <span className="badge blue">GeoAI Specialist</span>
            <span className="badge">LIESMARS Alumni</span>
            <span className="badge blue">CSC Scholar</span>
            <span className="badge consultancy">Consultancy Available</span>
          </div>
        </motion.div>
      </section>

      {/* 02. Impact Explorer */}
      <section className="impact-section">
        <div className="mono-label">Quantitative Magnitude</div>
        <div className="impact-grid">
          {impacts.map((impact, i) => (
            <motion.div
              key={i}
              className="impact-card"
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              viewport={{ once: true }}
            >
              <div className="impact-value impact-metric">{impact.value}</div>
              <div className="mono-label impact-label">{impact.label}</div>
              <p className="impact-detail">{impact.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 03. Professional Services */}
      <section className="services-section">
        <div className="mono-label section-header">Professional Services Available</div>

        <div className="services-grid">
          <motion.div
            className="service-card"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
          >
            <div className="service-icon">
              <MapPin size={24} />
            </div>
            <h3 className="service-title">Geospatial Technology Consultancy</h3>
            <p className="service-description">
              Expert consultation on GIS, remote sensing, and spatial data analysis. Specializing in urban mapping,
              impervious surface extraction, SAR-Optical data fusion, and Google Earth Engine implementations.
            </p>
          </motion.div>

          <motion.div
            className="service-card"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="service-icon">
              <GraduationCap size={24} />
            </div>
            <h3 className="service-title">Research Supervision & Mentorship</h3>
            <p className="service-description">
              Guidance for graduate students and researchers in GeoAI, machine learning for spatial analysis,
              and environmental studies. Co-supervised multiple M.Sc. theses on remote sensing applications.
            </p>
          </motion.div>

          <motion.div
            className="service-card"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="service-icon">
              <Cpu size={24} />
            </div>
            <h3 className="service-title">GeoAI & Deep Learning Solutions</h3>
            <p className="service-description">
              Development of custom spectral indices, ensemble learning models, and neural network architectures
              for land use classification, urban studies, and environmental hazard assessment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 04. Professional Development */}
      <section className="professional-dev-section">
        <div className="mono-label section-header">Continuous Professional Development</div>

        <div className="dev-tabs">
          <button
            className={`dev-tab ${activeDevTab === 'conferences' ? 'active' : ''}`}
            onClick={() => setActiveDevTab('conferences')}
          >
            Conferences ({conferences.length})
          </button>
          <button
            className={`dev-tab ${activeDevTab === 'workshops' ? 'active' : ''}`}
            onClick={() => setActiveDevTab('workshops')}
          >
            Workshops ({workshops.length})
          </button>
          <button
            className={`dev-tab ${activeDevTab === 'training' ? 'active' : ''}`}
            onClick={() => setActiveDevTab('training')}
          >
            Training ({trainings.length})
          </button>
          <button
            className={`dev-tab ${activeDevTab === 'certifications' ? 'active' : ''}`}
            onClick={() => setActiveDevTab('certifications')}
          >
            Certifications ({certifications.length})
          </button>
        </div>

        <div className="dev-content">
          {renderDevContent()}
        </div>
      </section>

      {/* 05. Leadership & Community */}
      <section className="leadership-section">
        <div className="mono-label section-header">Academic Leadership & Community</div>

        <div className="leadership-grid">
          {leadershipRoles.map((leader, i) => (
            <motion.div
              key={i}
              className="leadership-card"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
            >
              <h3 className="leadership-org">{leader.org}</h3>
              <p className="mono-label" style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>{leader.institution}</p>

              <div className="leadership-details">
                {leader.roles.map((role, j) => (
                  <div key={j}>
                    <div className="leadership-role">{role.position} • {role.period}</div>
                    <div className="leadership-detail-item">
                      <Target size={16} />
                      <span>{role.responsibility}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 06. Project Case Studies */}
      <section className="projects-section">
        <div className="mono-label section-header">Operational Projects</div>

        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="project-entry"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="project-meta">
                <div className="meta-item">
                  <span className="meta-label">Title</span>
                  <span className="meta-value">{project.role}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Region</span>
                  <span className="meta-value">{project.location}</span>
                </div>
              </div>

              <div className="project-content-grid">
                <div>
                  <h3 className="project-subtitle">{project.title}</h3>
                  <p>{project.challenge}</p>
                  <div className="project-metrics">
                    <div className="impact-value">{project.metric}</div>
                  </div>
                </div>
                <div className="project-methodology-col">
                  <div className="mono-label method-header">Methodology</div>
                  <p>{project.methodology}</p>
                  <p className="project-impact-statement">{project.impact}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 07. Field Expeditions */}
      <section className="field-expedition-section">
        <div className="mono-label section-header">Field Exploration Metrics</div>
        <div className="expedition-grid">
          {expeditions.map((exp, i) => (
            <motion.div
              key={i}
              className="expedition-card"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 15 }}
              viewport={{ once: true }}
            >
              <div className="card-icon" style={{ color: 'var(--accent-mint)' }}>{exp.icon}</div>
              <h3 className="expedition-title">{exp.title}</h3>
              <p>{exp.description}</p>
              <div className="expedition-tools">
                <span className="tool-label">Node: {exp.site}</span>
                <span className="tool-label">System: {exp.tools}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 08. The Narrative Journey */}
      <section className="journey-section">
        <div className="mono-label section-header">The Intellectual Path</div>

        <div className="milestones-wrapper">
          {milestones.map((ms, i) => (
            <motion.div
              key={i}
              className="milestone"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0.2, x: -20 }}
              viewport={{ margin: "-100px" }}
            >
              <div className="milestone-year">{ms.year}</div>
              <div className="milestone-content">
                <div className="mono-label milestone-org">{ms.org}</div>
                <h3>{ms.title}</h3>
                <p>{ms.description}</p>
                <div className="milestone-commentary">
                  Ref_note: "{ms.reflection}"
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 09. Publication Library */}
      <section className="pub-library">
        <div className="mono-label section-header">Publication Archive</div>

        {/* Publication Type Filters */}
        <div className="dev-tabs" style={{ marginTop: '2rem' }}>
          {['All', 'Journal', 'Book Chapter', 'Conference Proc'].map(type => (
            <button
              key={type}
              className={`dev-tab ${activePubType === type ? 'active' : ''}`}
              onClick={() => setActivePubType(type)}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="search-bar-container">
          <Search className="search-icon" size={18} />
          <input
            type="text"
            placeholder="Search publications by keyword..."
            className="search-input"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="pub-list">
          {publications.map((pub, i) => (
            <motion.div
              key={i}
              className="pub-entry"
              layout
            >
              <div className="pub-header">
                <h4 className="pub-title">{pub.title}</h4>
                <span className="badge blue">{pub.cluster}</span>
              </div>
              <div className="mono-label pub-meta">
                {pub.journal} • {pub.year}
              </div>
            </motion.div>
          ))}
          {publications.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-dim)' }}>
              No publications found matching your criteria.
            </div>
          )}
        </div>
      </section>

      {/* 10. Technical Tooling */}
      <section className="lab-section">
        <div className="lab-panel">
          <div className="mono-label">Stack_Configuration</div>
          <div className="lab-panel-grid">
            <div>
              <h4 className="mono-label stack-category-label">Languages</h4>
              <p>Python (DL), R (Stats), JavaScript (GEE), SQL, LaTeX.</p>
            </div>
            <div>
              <h4 className="mono-label stack-category-label">Sensors</h4>
              <p>SAR, LiDAR, UAV Photogrammetry, Multispectral.</p>
            </div>
            <div>
              <h4 className="mono-label stack-category-label">Ecosystem</h4>
              <p>ArcGIS Pro, QGIS, Earth Engine, Cloud-Native.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Connect */}
      <footer className="footer-lab">
        <div className="footer-nodes-container">
          <div className="mono-label">Connection_Nodes</div>
          <div className="footer-nodes">
            <a href="https://linkedin.com/in/akibjaved" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn Profile"><Linkedin size={20} /></a>
            <a href={scholarUrl} target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Google Scholar Profile"><GraduationCap size={20} /></a>
            <a href={researchGateUrl} target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="ResearchGate Profile"><BookOpen size={20} /></a>
            <a href="https://github.com/geoakib" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="GitHub Profile"><Github size={20} /></a>
            <a href="https://twitter.com/geoakib" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Twitter Profile"><Twitter size={20} /></a>
            <a href="mailto:akibjaved@outlook.com" className="footer-social-link" aria-label="Send Email"><Mail size={20} /></a>
            <a href="https://geoakib.github.io/contact/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Digital Contact Card" title="Digital Contact Card"><ContactRound size={20} /></a>
          </div>
        </div>
        <div className="footer-info">
          <p className="footer-copyright">&copy; 2026 RESEARCH ARCHIVE</p>
          <p className="mono-label footer-loc">LOC: DHAKA, BANGLADESH</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
