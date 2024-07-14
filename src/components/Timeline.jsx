import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const timelineData = [
  {
    title: "python",
    subtitle: "learn python",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolorum ullam adipisci ab dicta nesciunt, ipsam facilis. Qui maiores sunt ipsum molestiae assumenda excepturi sit. Qui, nemo voluptas!",
  },
  {
    title: "java",
    subtitle: "learn java",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolorum earum beatae Qui maiores sunt ipsum molestiae assumenda excepturi sit. Qui, nemo voluptas!",
  },
  {
    title: "c++",
    subtitle: "learn c++",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolorum Qui maiores sunt ipsum molestiae assumenda excepturi sit. Qui, nemo voluptas!",
  },
  {
    title: "php",
    subtitle: "learn php",
    description:
      "Lorem  Qui maiores sunt ipsum molestiae assumenda excepturi sit. Qui, nemo voluptas!",
  },
  {
    title: "c",
    subtitle: "learn c",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, dolorum earum beatae consequuntur, doloribus ea voluptates, molestias vero voluptas!",
  },
];

export default function Timeline() {
  return (
    <>
      <div
        style={{
          maxWidth: "1200px",
          height: "fit-content",
          padding: "2rem",
          paddingRight: "1.5rem",
          paddingLeft: "1.5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          margin: "auto",
        }}
      >
        <div
          style={{
            width: "fit-content",
            padding: "2rem",
            height: "4rem",
            background: "#161b22",
            borderBottom: "1px solid grey",
            borderTop: "1px solid grey",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "600",
            fontSize: "2.5rem",
          }}
        >
          <div>Timeline</div>
        </div>
        <VerticalTimeline lineColor={"#f79a24"}>
          {timelineData.map((data, index) => (
            <VerticalTimelineElement
              key={index} // Add a unique key for each element in the map
              contentStyle={{
                padding: "0",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "none",
                background: "transparent",
                border: "1px solid grey",
              }}
              iconStyle={{
                background: "#161b22",
                boxShadow:
                  "0 0 0 4px #fff, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
              }}
              // icon={<WorkIcon />}
            >
              <div
                style={{
                  width: "100%",
                  height: "2.5rem",
                  background: "#161b22",
                  borderBottom: "1px solid grey",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    gap: ".3rem",
                    alignItems: "center",
                    height: "inherit",
                    width: "100%",
                    paddingLeft: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "1.2rem",
                      height: "1.2rem",
                      background: "#ff5757",
                      borderRadius: "50%",
                    }}
                  ></div>
                  <div
                    style={{
                      width: "1.2rem",
                      height: "1.2rem",
                      background: "#ffde59",
                      borderRadius: "50%",
                    }}
                  ></div>
                  <div
                    style={{
                      width: "1.2rem",
                      height: "1.2rem",
                      background: "#7ed957",
                      borderRadius: "50%",
                    }}
                  ></div>
                </div>
              </div>
              <div style={{ padding: ".8rem" }}>
                <h2 style={{ color: "white" }}>{data.title}</h2>
                <h3
                  style={{
                    color: "white",
                    fontSize: ".9rem",
                    margin: ".7rem 0 1rem 0",
                  }}
                >
                  {data.subtitle}
                </h3>
                <p style={{ color: "white", margin: "0" }}>
                  {data.description}
                </p>
              </div>

              {/* You can add other content here based on your requirements */}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
}
