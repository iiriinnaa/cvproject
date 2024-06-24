import { useState } from "react";

export default function AddExperience() {
    const [experience, setExperience] = useState({
      company: '',
      title: '',
      dates: '',
      responsibilities: '',
    });

}