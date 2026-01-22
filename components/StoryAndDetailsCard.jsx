"use client";
import { useEffect } from "react";

const StoryAndDetailsCard = () => {
  useEffect(() => {
    const detailsCard = document.querySelector(".details-card");

    if (!detailsCard) return;

    const handleMouseLeave = () => {
      detailsCard.classList.add("return");
      setTimeout(() => {
        detailsCard.classList.remove("return");
      }, 500);
    };

    detailsCard.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      detailsCard.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  function yearsSince(dateString) {
    const pastDate = new Date(dateString);
    const currentDate = new Date();

    let age = currentDate.getFullYear() - pastDate.getFullYear();
    const m = currentDate.getMonth() - pastDate.getMonth();

    if (m < 0 || (m === 0 && currentDate.getDate() < pastDate.getDate())) {
      age--;
    }

    return age;
  }

  return (
    <div className="flex flex-1 flex-col mt-1 md:mt-4 gap-2 w-full z-50">
      <h2 className="font-semibold">
        Profile
        <hr className="mt-2 md:mt-3" />
      </h2>
      <div className="absolute top-4 right-4 md:top-6 md:right-6">
        <img
          src="/assets/me.jpg"
          alt="Profile"
          className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-[#61cc9c] object-cover shadow-md"
        />
      </div>

      <div className="text-md md:text-base flex flex-col gap-2 tracking-wide">
        <h2>
          name ~{" "}
          <i className="font-medium text-[#61cc9c]">
            Vishnu Prakash Suthar
          </i>
        </h2>

        <h2>
          email ~{" "}
          <i className="font-medium text-[#61cc9c]">
            vishnuprakash12.official@gmail.com
          </i>
        </h2>

        <h2>
          address ~{" "}
          <i className="font-medium text-[#61cc9c]">
            Jodhpur, Rajasthan, India
          </i>
        </h2>

        <h2>
          phone ~{" "}
          <i className="font-medium text-[#61cc9c]">
            (+91) 9587795523
          </i>
        </h2>

        <hr className="opacity-25" />

        <h2>
          nationality ~{" "}
          <i className="font-medium text-[#61cc9c]">Indian</i>
        </h2>

        <h2>
          age ~{" "}
          <i className="font-medium text-[#61cc9c]">
            {yearsSince("2005-05-22")}
          </i>
        </h2>

        <h2>
          gender ~{" "}
          <i className="font-medium text-[#61cc9c]">Male</i>
        </h2>
      </div>
    </div>
  );
};

export default StoryAndDetailsCard;
