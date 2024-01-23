import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {

  const redirectToProject = () => {
    
    // Open the project link in a new tab/window
    if (url) {
      window.open(url, '_blank');
    } else {
      console.error('Project link is not available.');
    }
  }

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={redirectToProject}>
        <img src={imgUrl} className="test"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
