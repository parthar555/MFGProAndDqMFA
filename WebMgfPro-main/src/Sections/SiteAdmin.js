import {GrNotes, GrDatabase, GrCompare, GrNotification, GrLike, GrSchedules, GrPlan, GrCluster, GrContactInfo } from "react-icons/gr";
const SiteAdmin = () => {
  
    const contentBoxes = [
      //swati
        { title: "Forms Builder", color: "#0484cc", fontColor: "white", icon: <GrDatabase />,content:"Create forms for operators to work with and report issues in real time" },
        { title: "Shift Planner", color: "#0484cc", fontColor: "white", icon: <GrPlan /> ,content:"Plan and assign operators for a shift"},
        { title: "Shift Leader Planner", color: "#0484cc", fontColor: "white", icon: <GrContactInfo />,content:"Plan the shifts assigning production lines to supervise" },
        { title: "Workflows Manager", color: "#0484cc", fontColor: "white", icon: <GrCluster />,content:"Build the workflows that staff will perform during their shift." },
        { title: "Production Schedule",color: "#0484cc", fontColor: "white", icon: <GrSchedules />,content:"Plan the shifts assigning production lines to supervise" },
        { title: "Reports", color: "#0484cc", fontColor: "white", icon: <GrNotes />,content : "Consult all the reports created during the shifts." },
        { title: "Notifications", color: "#0484cc", fontColor: "white", icon: <GrNotification />,content : "See all your notifications here" },
        { title: "Submit Feedback", color: "#0484cc", fontColor: "white", icon: <GrLike />,content : "Please submit your feedback" },
    
       
      ]
    return (
        <div className='contentBox_cont'>
              {contentBoxes?.map(itm => {
                return (

                  <div className='contentBox' >

                    <div className='contentBoxes_icon' style={{ backgroundColor: itm?.color, borderColor: itm?.color, color: itm?.fontColor }}>
                      {itm?.icon}
                    </div>
                    <div className='contentBoxes_title'>{itm?.title}
                    </div>
                    <div className='contentBoxes_content'>{itm?.content}
                    </div>


                  </div>)
              })}
        </div> 
    )
}

export default SiteAdmin;
