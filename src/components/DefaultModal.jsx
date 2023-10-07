import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { BsArrowRight } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

export default function DefaultModal() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modalData = {
    state: "Delhi",
    name: "Delhi Minority Scholarship",
    logo: "https://scholarshiparena.in/wp-content/uploads/2021/10/MERIT-SCHOLARSHIP-FOR-MINORITIES-min-1024x576.png",
    description: "Scholarship for minority community students in Delhi.",
    eligibility: "Minority community students pursuing higher education",
    awardingAuthority: "Government of Delhi",
    link: "https://example.com/delhi-minority-scholarship",
    applicationDeadline: "15th October 2023",
    benefits: "Varies by category",
    ageCriteria: "minority",
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="border-[1px] border-gray-100 shadow-2xl m-3 p-5 rounded-2xl transition duration-500 hover:-translate-y-2 flex flex-col items-center justify-between">
            <AiFillCloseCircle
              className="absolute top-2 right-2"
              onClick={handleClose}
            />
            <div className="mb-4">
              <img
                src={modalData.logo}
                alt={modalData.title}
                className="h-[250px] w-full rounded-2xl shadow-xl"
              />
              <p className="py-2 text-2xl font-bold text-[#1b1b1b] w-full">
                {modalData.title}
              </p>
              <p className="py-2 text-md text-[#1b1b1b] w-full">
                {modalData.description}
              </p>
              <p className="py-2  tracking-widest font-normal text-[#1b1b1b] w-full">
                <span className="font-bold">Eligiblity: </span>
                {modalData.eligibility}
              </p>
              <p>
                <span className="font-bold">Benefits: </span>
                {modalData.benefits}
              </p>
              <p>
                <span className="font-bold">Location: </span>
                {modalData.state}
              </p>
              <p className="font-extrabold mt-2 text-lg">
                Application ends: {modalData.applicationDeadline}
              </p>
            </div>
            <a href={modalData.link} target="_blank" rel="noreferrer">
              <Button
                style={{
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  width: "100%",
                }}
                className="text-white text-xl font-bold flex items-center justify-center gap-5 group"
                variant="contained"
              >
                Explore
                <BsArrowRight
                  size={30}
                  className="transition duration-300 group-hover:translate-x-4"
                />
              </Button>
            </a>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
