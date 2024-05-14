import './ProjectCard.css'
import React, {useState} from "react";
import {Modal} from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '10px',
    p: 4,
};

export default function ProjectCard({ project }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className="card">
            <div className="card-details">
                <p className={"main-skill"}>{project.mainTag}</p>
                <p className="text-title">{project.name}</p>
                <p className="text-body">{project.shortDesc}</p>
            </div>
            <button className="card-button" onClick={handleOpen}>More info</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {project.name}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {project.description}
                    </Typography>
                    <div className={"links"}>
                        <a href={project.git}>
                            <i className='bx bxl-github'></i>
                        </a>
                        <a href={project.url}>
                            <i className='bx bxs-info-square'></i>
                        </a>
                    </div>
                    <div className={"tags"}>
                        {
                            project.tags.map((tag, index) => {
                                return <div className={"tag"} key={index}>{tag}</div>
                            })
                        }
                    </div>
                </Box>
            </Modal>
        </div>
    );
}