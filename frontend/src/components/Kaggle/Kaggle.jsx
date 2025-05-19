import { Button } from "antd";
import React from "react";

const Kaggle = () => {
  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <Button
        type="default"
        size="large"
        href="https://www.kaggle.com/datasets/aisankheiri/turkish-e-commerce-dataset-with-different-intents"
        target="_blank"
      >
        Kaggle Veri Seti Linki
      </Button>
    </div>
  );
};

export default Kaggle;
