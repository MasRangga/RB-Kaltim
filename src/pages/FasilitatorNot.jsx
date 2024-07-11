import React from 'react'
import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";

const FasilitatorNot = () => {
    const navigate = useNavigate();

  return (
    <div>
      <div className="h-screen flex justify-center items-center">
        <Result
          status="404"
          title="Maaf, tidak ada lowongan untuk posisi Fasilitator saat ini"
          subTitle="Harap periksa kembali di lain waktu."
          extra={
            <Button
              type="primary"
              onClick={() => navigate("/")}
              className="bg-primary"
            >
              Back To Home
            </Button>
          }
        />
      </div>
    </div>
  );
}

export default FasilitatorNot
