import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const VerifyComponent = () => {
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const navigate = useNavigate();
  const [info, setInfo] = useState("");

  const verifyPayment = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/v1/verify", {
        success,
        orderId,
      });

      if (res.data.success) {
        setInfo(
          "Przetwarzanie zakończone pomyślnie, wysłano maila z produktami. Dziękujemy i zapraszamy ponownie :)"
        );
      } else {
        setInfo("Płatność nie została zrealizowana");
      }

      setTimeout(() => {
        navigate("/");
      }, 5000);
    } catch (error) {
      console.error("Błąd przy weryfikacji płatności", error);
      setInfo("Wystąpił błąd przy łączeniu się z serwerem");
    }
  };

  useEffect(() => {
    verifyPayment();
  }, [success, orderId]);

  return (
    <div className="max-w-5xl min-h-[53.5vh] mx-auto pt-[5vh] pb-[5vh] flex flex-col justify-center items-center">
      <div>
        <p className="text-3xl text-center">{info}</p>
        <p className="text-xl text-center">
          Za chwilę zostaniesz przekierowany na stronę główną
        </p>
      </div>
    </div>
  );
};

export default VerifyComponent;
