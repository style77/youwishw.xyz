import type { NextPage } from "next";

import React, { useEffect, useState } from "react";

import { FiGithub, FiMail, FiX } from "react-icons/fi";
import { FaDiscord, FaTelegram, FaTelegramPlane } from "react-icons/fa";

import { Tooltip } from "../components/tooltip";

import { NextSeo } from "next-seo";
import { title } from "process";

const MAIL = "stylek777@gmail.com";
const GITHUB = "Style77";

// todo make changing titles
const TITLES = [
  "a developer for your needs",
  "youwish a developer like this",
  "great job for affordable prices",
  "Python, Golang, Javascript and anything you want",
  "you dont have time/experience/desire to finish your project? I got you",
  "websites, programs, scrappers - whatever you dream of",
  "what would i do if i didn't code? I guess we'll never know",
  "I am doing SEO as well",
];

const Home: NextPage = () => {
  const [lastSubTitle, setLastSubTitle] = useState("");

  useEffect(() => {
    const switchingText = () => {
      const subTitleElem = document.getElementById("subtitle") as HTMLElement;

      let randomSubTitle = TITLES[Math.floor(Math.random() * TITLES.length)];
      while (randomSubTitle === lastSubTitle) {
        randomSubTitle = TITLES[Math.floor(Math.random() * TITLES.length)];
      }
      setLastSubTitle(randomSubTitle);

      setTimeout(() => {
        subTitleElem.innerHTML = randomSubTitle;
      }, 800);
    };

    const getAnimationTime = () => {
      const subTitleElem = document.getElementById("subtitle") as HTMLElement;
      const compStyles = window.getComputedStyle(subTitleElem);
      let animation = compStyles.getPropertyValue("animation");

      // firefox support for non-shorthand property
      animation != ""
        ? animation
        : (animation = compStyles.getPropertyValue("-moz-animation-duration"));

      // webkit support for non-shorthand property
      animation != ""
        ? animation
        : (animation = compStyles.getPropertyValue(
            "-webkit-animation-duration"
          ));

      const animationTime =
        parseFloat(animation.match(/\d*[.]?\d+/)?.[0] ?? "") * 1000;
      return animationTime;
    };

    switchingText();
    setInterval(switchingText, getAnimationTime());

    const replace = () => {
      setTimeout(function () {
        var replacers = document.querySelectorAll("[data-replace]");
        for (const replacer of replacers) {
          if (replacer instanceof HTMLElement) {
            const replacerDataset = replacer.dataset.replace!;
            let replaceClasses = JSON.parse(replacerDataset.replace(/'/g, '"'));
            Object.keys(replaceClasses).forEach(function (key) {
              replacer.classList.remove(key);
              replacer.classList.add(replaceClasses[key]);
            });
          }
        }
      }, 1);
    };
    replace();
  }, []);

  return (
    <>
      <NextSeo
        title="youwish - a developer for your needs"
        description="Developer for your needs - Python/Javascript/TypeScript/Golang/React/Next and many more! Affordable prices, big experience and fast learner in case of compulsion to use new technology. Check right now!"
        canonical="https://youwishw.xyz/"
        openGraph={{
          url: "https://youwishw.xyz/",
          title: "youwish - a developer for your needs",
          description:
            "Developer for your needs - Python/Javascript/TypeScript/Golang/React/Next and many more!",
          site_name: "youwishw.xyz",
        }}
      />
      <div className="grid h-screen place-items-center z-index-10">
        <div className="select-none">
          <div
            className="cursor-default duration-700 relative transform opacity-0 transition-all translate-y-12 ease-out"
            data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'
          >
            <h1
              className="text-6xl text-slate-100 font-light antialiased block mb-2 transition ease-in-out duration-300 hover:text-slate-100"
              id="title"
            >
              youwish{" "}
            </h1>
            <h1
              className="text-xl text-slate-300 font-light antialiased transition ease-in-out duration-300 hover:text-slate-200"
              id="subtitle"
            >
              a developer for your needs
            </h1>
          </div>
          <div className="inline-grid grid-cols-3 gap-6 mt-5 z-index-10">
            <div
              id="github"
              className="delay-300 duration-700 relative transform opacity-0 transition-all translate-y-12 ease-out inline"
              data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'
            >
              <a href={`https://github.com/${GITHUB}`}>
                <div className="h-14 w-14 rounded-full bg-zinc-900 text-slate-200 transition ease-in-out duration-300 hover:bg-slate-100 hover:text-zinc-900 grid place-items-center">
                  <FiGithub className="h-7 w-7 block m-auto" />
                </div>
              </a>
            </div>
            <div
              id="contact"
              className="delay-[600ms] duration-700 relative transform opacity-0 transition-all translate-y-12 ease-out inline"
              data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'
            >
              <a href={`mailto:${MAIL}`}>
                <div className="h-14 w-14 rounded-full bg-zinc-900 text-slate-200 transition ease-in-out duration-300 hover:bg-slate-100 hover:text-zinc-900 grid place-items-center">
                  <FiMail className="h-7 w-7 block m-auto" />
                </div>
              </a>
            </div>
            <div
              id="tg-discord"
              className="delay-[900ms] duration-700 relative transform opacity-0 transition-all translate-y-12 ease-out inline"
              data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'
            >
              <a href="https://t.me/youwishw">
                <div className="h-14 w-14 rounded-full bg-zinc-900 text-slate-200 transition ease-in-out duration-300 hover:bg-slate-100 hover:text-zinc-900 grid place-items-center">
                  <FaTelegramPlane className="w-7 h-7" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
