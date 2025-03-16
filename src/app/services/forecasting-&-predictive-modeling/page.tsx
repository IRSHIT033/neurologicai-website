import ExperiencesSection from "@/components/ui/services/experience";
import HeaderSection from "@/components/ui/services/generativeai";
import SolutionGrid from "@/components/ui/services/solutions";

const page = () => {
  const servicesHeaderText = {
    headertext: "Forecasting & Predictive Modeling",
    headerdesc: `Neurologic AI delivers advanced forecasting solutions by combining classical methods like ARIMA and Prophet with deep learning models such as LSTM, N-BEATS, and Transformers for accurate trend prediction and anomaly detection. Using PyTorch, Horovod, and Kubernetes, we enable large-scale, distributed training on HPC clusters. Our pipelines integrate hyperparameter optimization, feature engineering, and ensemble techniques for robust performance. From supply chain optimization to financial risk mitigation, our scalable, data-driven models empower businesses with forward-looking insights and a competitive edge.`,
  };

  const experiences = [
    {
      text: "AI-Powered Health Insurance Claim Success Prediction",
      desc: "Our risk modeling suite optimizes insurance premiums and enhances proactive care for Medicare & Medicaid populations. By integrating ICD & CC codes, predictive modeling, and patient behavior analytics, it ensures accurate risk scoring, early disease detection, and fair premium settings. With 15% improved data completeness and 10-15% better early diagnosis, it reduces risk assessment errors by 25%, aligning costs with true patient risk.",
      href: "https://drive.google.com/file/d/1XUx5m8CbWfU2Fox3j5-AM4v2UFkozycw/view?usp=drive_link",
    },
    {
      text: "AI-Powered Healthcare Risk Assessment & Predictive Analytics",
      desc: "Our risk modeling suite optimizes insurance premiums and enhances proactive care for Medicare & Medicaid populations. By integrating ICD & CC codes, predictive modeling, and patient behavior analytics, it ensures accurate risk scoring, early disease detection, and fair premium settings. With 15% improved data completeness and 10-15% better early diagnosis, it reduces risk assessment errors by 25%, aligning costs with true patient risk.",
      href: "https://drive.google.com/file/d/1LZEym40U4L73D133cPc52SpTnYEQtDIA/view?usp=drive_link",
    },
    {
      text: "EMI Default Risk Prediction for Financial Services",
      desc: "This paper outlines the development and implementation of an advanced analytics framework aimed at predicting EMI (Equated Monthly Installment) default risks for Non-Banking Financial Companies (NBFCs). By leveraging cutting-edge feature engineering and machine learning techniques, specifically XGBoost, the proposed model enhances predictive accuracy and supports real-time decision-making, significantly strengthening financial risk management. The framework integrates comprehensive customer-specific features and analyzes dynamic temporal payment behaviors, achieving high scalability and adaptability in real-time environments, providing NBFCs with a powerful tool to manage risk and optimize financial operations.",
      href: "https://drive.google.com/file/d/1ecxkU8FO7trMpNejfUz-mo6pSViE9utO/view?usp=drive_link",
    },
    {
      text: "Call Center Volume Forecasting for Optimized Workforce Planning",
      desc: "Accurate call volume forecasting is critical for efficient workforce management in call centers. Traditional methods often fail to provide precise predictions, leading to staffing inefficiencies, increased operational costs, and poor customer service. Our advanced forecasting solution, powered by Facebook’s Prophet, accurately predicts daily call volumes, enabling optimized workforce planning. This solution enhances staffing strategies, reduces operational costs, and improves customer satisfaction by ensuring the right number of agents are available. With an impressive 99.15% forecasting accuracy and a confidence band of just 7%, our approach helps businesses achieve cost efficiency, enhanced customer experience, and better resource management. ",
      href: "https://drive.google.com/file/d/1Ljzv8kcjMjmy2FcxrhYT8_lFo2qdkzmO/view?usp=drive_link",
    },
  ];

  return (
    <div className="scroll-smooth">
      <HeaderSection servicesHeaderText={servicesHeaderText} />
      <SolutionGrid solutions={experiences} />
      <ExperiencesSection experiences={experiences} />
    </div>
  );
};

export default page;
