const primaryNav = document.querySelector(".primary-navigation");
const burger = document.querySelector(".humberger");

burger.addEventListener("click", function () {
  setTimeout(() => {
    primaryNav.classList.toggle("show");
  }, 100);
  burger.classList.toggle("active");
});

var typed = new Typed(".auto-type", {
  strings: ["Front-End Developer"],
  typeSpeed: 250,
  backSpeed: 150,
  loop: true,
});

const toTop = document.querySelector(".toTop");

window.addEventListener("scroll", function () {
  const scrollposition = window.scrollY;

  if (scrollposition >= window.innerHeight * 0.01) {
    toTop.style.display = "block";
    setTimeout(() => {
      toTop.style.display = "none";
    }, 250);

    setTimeout(() => {
      toTop.style.display = "block";
    }, 500);
  } else {
    setTimeout(() => {
      toTop.style.display = "none";
    }, 600);
    toTop.style.display = "none";
  }
});

toTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

let section = document.querySelectorAll("section");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 400;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add("show-animate");
    }
  });
};

const btnStack = document.querySelector(".techstack");
const btnTools = document.querySelector(".tools");
const stackWrapper = document.querySelector(".stack");
const toolWrapper = document.querySelector(".tool");

btnTools.addEventListener("click", function () {
  stackWrapper.classList.add("hide");
  toolWrapper.classList.add("show");

  btnStack.classList.remove("active");
  btnTools.classList.add("active");
});

btnStack.addEventListener("click", function () {
  toolWrapper.classList.remove("show");
  stackWrapper.classList.remove("hide");

  btnTools.classList.remove("active");
  btnStack.classList.add("active");
});

const projectWrapper = document.querySelector(".grid");
const homeSec = document.getElementById("home");
const aboutSec = document.getElementById("About");
const skillSec = document.getElementById("Skill");
const ProjSec = document.getElementById("Project");
const body = document.querySelector("body");
const allview = document.querySelector(".All-view");
const back = document.querySelector(".back");
const load = document.querySelector(".load");

const wave = document.querySelectorAll(".wave");

let i;

i = 6;

allview.addEventListener("click", function () {
  ProjSec.classList.remove("show-animate");
  ProjSec.style.marginTop = "2rem";
  allview.classList.add("all-hide");
  back.classList.add("d-flex");
  load.classList.add("show");
  homeSec.classList.add("all-hide");
  aboutSec.classList.add("all-hide");
  skillSec.classList.add("all-hide");
  wave.forEach((wave) => {
    wave.classList.add("all-hide");
  });

  window.scrollTo(0, 0);
  body.style.overflow = "hidden";
  setTimeout(() => {
    load.classList.remove("show");
    body.style.overflow = "auto";
  }, 500);

  setTimeout(() => {
    ProjSec.classList.add("show-animate");
  }, 700);

  i = projects.length;

  getProject();
});

back.addEventListener("click", () => {
  ProjSec.classList.remove("show-animate");
  ProjSec.style.marginTop = "2rem";
  allview.classList.remove("all-hide");
  back.classList.remove("d-flex");
  homeSec.classList.remove("all-hide");
  aboutSec.classList.remove("all-hide");
  skillSec.classList.remove("all-hide");
  wave.forEach((wave) => {
    wave.classList.remove("all-hide");
  });

  load.classList.add("show");
  body.style.overflow = "hidden";

  ProjSec.scrollIntoView({ behavior: "smooth" });

  setTimeout(() => {
    load.classList.remove("show");
    body.style.overflow = "auto";
  }, 500);

  setTimeout(() => {
    ProjSec.classList.add("show-animate");
  }, 600);

  i = 6;

  getProject();
});

function getProject() {
  projectWrapper.innerHTML = "";
  let wrap = "";
  projects.slice(0, i).forEach((proj, index) => {
    let projectImg = proj.languages.map((pro) => temlateLang(pro.img, pro.alt));

    let detailimg = proj.detail
      .map((detail) =>
        TemplateDetailProject(detail.desktop, detail.tablet, detail.mobile)
      )
      .join("");

    projectImg = projectImg.join("");

    wrap += templateProject(
      proj.trans,
      proj.image,
      proj.nama,
      projectImg,
      proj.description,
      proj.preview,
      detailimg
    );
  });
  projectWrapper.innerHTML += wrap;
}

getProject();

// const iclose = document.querySelector(".detail-iclose");
// const close = document.querySelector(".detail-close");
const detailBox = document.querySelector(".detail-box");
const detailWrapper = document.querySelector(".detail-wrapper");

window.addEventListener("click", function (e) {
  if (e.target.classList.contains("detail-close")) {
    detailBox.classList.remove("active");
  }
});
window.addEventListener("click", function (e) {
  if (e.target.classList.contains("detail-iclose")) {
    detailBox.classList.remove("active");
  }
});

window.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-details")) {
    detailBox.classList.add("active");

    const parent = e.target.parentElement.parentElement;
    const head = parent.querySelector(".head").textContent;
    const text = parent.querySelector(".text").textContent;
    const desktop = parent.querySelector(".dekstop").getAttribute("src");
    const tablet = parent.querySelector(".tablet").getAttribute("src");
    const mobile = parent.querySelector(".mobile").getAttribute("src");

    const modal = tamplateDetail(head, desktop, tablet, mobile, text);

    detailWrapper.innerHTML = modal;
  }
});

function temlateLang(lang, alt) {
  return ` <img src="${lang}" alt="${alt}" />`;
}

function TemplateDetailProject(detail1, detail2, detail3) {
  return `         <img
                    class="dekstop"
                    src="${detail1}"
                    alt="dekstop"
                  />
                  <img
                    class="tablet"
                    src="${detail2}"
                    alt="dekstop"
                  />
                  <img
                    class="mobile"
                    src="${detail3}"
                    alt="dekstop"
                  />
                `;
}

function tamplateDetail(head, desktop, tablet, mobile, text) {
  return `<div class="detail-heading">
            <h2 class="fs-secondary-heading fw-bold">
             ${head}
            </h2>
            <i class="ph-thin ph-x detail-iclose"></i>
          </div>

          <div class="detail-image">
            <img
              class="dekstop"
              src="${desktop}"
              alt="dekstop"
            />
            <img
              class="tablet"
              src="${tablet}"
              alt="dekstop"
            />
            <img
              class="mobile"
              src="${mobile}"
              alt="dekstop"
            />
          </div>
          <div class="detail-content">
            <p class="fw-medium">
             ${text}
            </p>
          </div>
          <div class="detail-button d-flex">
            <a class="repo" href="#"
              >Repository <i class="ph-fill ph-github-logo"></i
            ></a>
            <button class="detail-close">Close</button>
          </div>`;
}

function templateProject(trans, image, nama, lang, text, preview, detailimg) {
  return `   <div class="card animate3" style="--trans: ${trans}">
            <div class="card-thum">
                <img src="${image}" alt="" />
              </div>
              <div class="card-content">
                <div class="card-content">
                  <h4 class="fw-medium fs-400 fs-secondary-heading head">
                   ${nama}
                  </h4>
                  <div class="language d-flex gap">
                    ${lang}
                  </div>
                  <p class="fs-300 fw-reguler text">
                   ${text}
                  </p>
                </div> 
                <div class="detail-image-hide">
                ${detailimg}
                </div>
              </div>
              <div class="card-btn">
                <a id="details" class="btn-details">
                  Details <i class="ph-fill ph-arrow-circle-right"></i>
                </a>
                <a href="${preview}" id="preview" class="btn-project">
                  Preview <i class="ph ph-eye"></i>
                </a>
              </div>
            </div>`;
}
