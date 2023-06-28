"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Draggable from "react-draggable";
import Clock from "./Clock";

const Index: React.FC = () => {
  const [folderWidth, setFolderWidth] = useState<number>(80);
  const [folderHeight, setFolderHeight] = useState<number>(65);
  const [imgFileWidth, setImgFileWidth] = useState<number>(72);
  const [imgFileHeight, setImgFileHeight] = useState<number>(96);
  const [language, setLanguage] = useState("A");
  const projects = useMemo(
    () => [
      {
        path: "https://blog.divdivdiv.com",
        projectName: language === "A" ? "Project 1" : "프로젝트 1",
        projectDescription: language === "A" ? "Blog" : "블로그",
      },
      {
        path: "/cinephile-test",
        projectName: language === "A" ? "Project 2" : "프로젝트 2",
        projectDescription:
          language === "A" ? "Cinephile Test" : "시네필 테스트",
      },
      {
        path: "/sheep-pomodoro",
        projectName: language === "A" ? "Project 3" : "프로젝트 3",
        projectDescription: language === "A" ? "Pomodoro" : "뽀모도로",
      },
      {
        path: "/fruits",
        projectName: language === "A" ? "Project 4" : "프로젝트 4",
        projectDescription: language === "A" ? "Fruits" : "과일 생성기",
      },
      {
        path: "/possible-universe",
        projectName: language === "A" ? "Project 5" : "프로젝트 5",
        projectDescription:
          language === "A" ? "Possible Universe" : "문장 생성기",
      },
    ],
    [language]
  );

  const clickIconHandler = (path: string) => {
    if (path.startsWith("http")) {
      window.open(path, "_blank"); // 외부 링크를 새 탭에서 열기
    } else {
      const newTab = window.open(path, "_blank"); // 새 탭 열기
      newTab?.focus(); // 새 탭으로 포커스 이동
    }
  };

  const IconContainer: React.FC<{
    path: string;
    projectName: string;
    projectDescription: string;
    className: string;
  }> = ({ path, projectName, projectDescription, className }) => (
    <Draggable>
      <div className={className} onDoubleClick={() => clickIconHandler(path)}>
        <div
          className="index-icon-image"
          style={{
            color: "white",
            cursor: "move",
            backgroundImage: `url(folder.png)`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            width: folderWidth,
            height: folderHeight,
          }}
        ></div>
        <div className="index-icon-text">
          <div>{projectName}</div>
          <div>({projectDescription})</div>
        </div>
      </div>
    </Draggable>
  );

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = currentDate.getDate();
  const [dayOfWeek, dayOfEngWeek] = getDayOfWeek(currentDate);

  function getDayOfWeek(date: Date): [string, string] {
    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    const daysOfEngWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayIndex = date.getDay();
    return [daysOfWeek[dayIndex], daysOfEngWeek[dayIndex]];
  }

  const [showImage, setShowImage] = useState(false);
  const [imgSrc, setImgSrc] = useState<string>("");
  const [imgAlt, setImgAlt] = useState<string>("");

  const handleDoubleClick = (index: number) => {
    if (index === 6) {
      setImgSrc("/cat.webp");
      setImgAlt("Cat");
    } else if (index === 7) {
      setImgSrc("/me.webp");
      setImgAlt("Me");
    }
    setShowImage(true);
  };

  const handleImageClick = () => {
    setShowImage(false);
    setImgSrc("");
    setImgAlt("");
  };

  interface ImageModalProps {
    src: string;
    alt: string;
    onClick: any;
  }

  const ImageModal = ({ src, alt, onClick }: ImageModalProps) => {
    return (
      <div
        className="image-modal"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={onClick}
      >
        <Image src={src} alt={alt} width={720} height={961} />
      </div>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",

        // backgroundColor: "black",
        // backgroundColor: "rgb(30, 30, 30)",
        // backgroundColor: "rgb(255, 255, 255)",
        // backgroundColor: "rgb(244, 244, 244)",
        // backgroundColor: "#333",
        backgroundColor: "#ffffff",
        fontFamily: `Pretendard Variable, Pretendard, -apple-system,
        BlinkMacSystemFont, system-ui, Roboto, Helvetica Neue, Segoe UI,
        Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, Apple Color Emoji,
        Segoe UI Emoji, Segoe UI Symbol, sans-serif`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "98%",
            height: "35px",
            borderBottom: "1px solid #000000",
            // backgroundColor: "blue",
            // opacity: "50%",
          }}
        >
          {/* style={{ marginLeft: "200px" }} */}
          {/* style={{ fontWeight: "500" }} */}
          <div className="menu-text">
            {/* {language === "A" ? "Home" : "홈"} */}
            divdivdiv
          </div>
          <div className="menu-text">{language === "A" ? "About" : "소개"}</div>
          <div className="menu-text">
            {language === "A" ? "Contact" : "연결"}
          </div>
          <div style={{ flexGrow: "1" }}></div>
          <div
            className="right-menu-text"
            onClick={() => {
              language === "A" ? setLanguage("한") : setLanguage("A");
            }}
            style={{
              // fontWeight: "450",
              // border: "1px solid #444444",
              // backgroundColor: "#000000",
              border: "1px solid #000000",
              // color: "#ffffff",
              borderRadius: "5px",
              padding: "1px 7px",
            }}
          >
            {language}
          </div>
          <div
            className="right-menu-text"
            style={{
              // backgroundColor: "#000000",
              // border: "1px solid #444444",
              border: "1px solid #000000",
              // color: "#ffffff",
              borderRadius: "5px",
              marginRight: "0px",
            }}
          >
            {language === "A"
              ? `${months[month - 1]} ${day} (${dayOfEngWeek})`
              : `${month}월 ${day}일 (${dayOfWeek})`}
            {/* {year}/{month}/{day} */}
          </div>
          <div className="right-menu-text">
            <Clock language={language} />
          </div>
        </div>
        {/* <div>something</div> */}
      </div>
      <div
        style={{
          flexGrow: "1",
        }}
      >
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
          }}
        >
          {/* <div style={{ fontSize: "400px", textAlign: "end" }}>divdivdiv</div> */}
        </div>
        {showImage && (
          <ImageModal src={imgSrc} alt={imgAlt} onClick={handleImageClick} />
        )}
        {projects.map((project, index) => (
          <IconContainer
            key={index}
            path={project.path}
            projectName={project.projectName}
            projectDescription={project.projectDescription}
            className={`index-icon-container-${index + 1}`}
          />
        ))}
        <Draggable>
          <div className="index-icon-container-6">
            <div
              className="index-icon-image"
              style={{
                color: "white",
                cursor: "move",
                backgroundImage: `url(cat.webp)`,
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                width: imgFileWidth,
                height: imgFileHeight,
                border: "4px solid white",
                boxShadow: "1.5px 1.5px 3px gray",
              }}
              onDoubleClick={() => handleDoubleClick(6)}
            ></div>
            <div className="index-img-text">
              {language === "A" ? "cat.webp" : "고양이.webp"}
            </div>
          </div>
        </Draggable>
        <Draggable>
          <div className="index-icon-container-7">
            <div
              className="index-icon-image"
              style={{
                color: "white",
                cursor: "move",
                backgroundImage: `url(me.webp)`,
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                width: imgFileWidth,
                height: imgFileHeight,
                border: "4px solid white",
                boxShadow: "1.5px 1.5px 3px gray",
              }}
              onDoubleClick={() => handleDoubleClick(7)}
            ></div>
            <div className="index-img-text">
              {language === "A" ? "me.webp" : "나.webp"}
            </div>
          </div>
        </Draggable>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // width: "98%",
          height: "30px",
          borderTop: "1px solid #dddede",
          // backgroundColor: "blue",
          // opacity: "50%",
        }}
      >
        <div style={{ width: "100px" }}></div>
        <div style={{ fontSize: "12px", fontWeight: "300" }}>7개의 항목</div>
        <div style={{ marginRight: "10px" }}>
          <input type="range"></input>
        </div>
      </div>
    </div>
  );
};

export default Index;
