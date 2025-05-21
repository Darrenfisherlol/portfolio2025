import { Fragment } from "react";
import LinkedinIcon from "../../../assets/svg/LinkedIn.svg";
import JavaIcon from "../../../assets/svg/Java--Streamline-Svg-Logos.svg";

export default function TechStack() {
  return (
    <>
        <img src={LinkedinIcon} title="LinkedIn" />
        {/* <JavaIcon title="Java" /> */}

        <img src="../../../assets/svg/LinkedIn.svg" alt="LinkedIn" />
        <img src="../../../assets/svg/Java--Streamline-Svg-Logos.svg" alt="Java" />
    </>
  );
}