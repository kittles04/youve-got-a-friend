import React from 'react'

const ProjectDetails = (props) => {
    
    const id = props.match.params.id;
    console.log(id)
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">How I Helped - {id}</span>
                    <p>Nostrud est officia aliquip nisi minim eu et. Mollit cillum reprehenderit est nisi incididunt qui. Lorem ipsum do occaecat dolor sunt occaecat magna culpa nulla laborum minim enim. Amet consequat exercitation aliqua voluptate sint exercitation velit culpa Lorem irure ullamco voluptate. Velit aute ut magna minim ex ad ut. Labore nostrud consequat reprehenderit fugiat sint quis dolore.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by a loving Community Member</div>
                    <div>3rd April, 2020</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails