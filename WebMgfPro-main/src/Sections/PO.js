import { GrPlan, GrLike, GrDatabase, GrNotes, GrCertificate, GrTree, GrWorkshop, GrNotification, GrSchedule, GrSchedules } from "react-icons/gr";
const PO = () => {
    const contentBoxes = [
      //swati
        { title: "Libraries",color: "#0484cc", fontColor: "white", icon: <GrDatabase />,content:"Create forms for operators to work with and report issues in real time" },
      //  { title: "Section Library", color: "#0484cc", fontColor: "white", icon: <GrPlan /> ,content:"Create a section for a form"},
        { title: "Production Schedule", color: "#0484cc", fontColor: "white", icon: <GrSchedules />,content:"Plan the shifts assigning production lines to supervise" },
        { title: "My Shift", color: "#0484cc", fontColor: "white", icon: <GrTree /> ,content:"See your shift details"},
        { title: "Digital Quality", color: "#0484cc", fontColor: "white", icon: <GrCertificate/>,content :"Tracks quality in digital forms" },
        { title: "Reports", color: "#0484cc", fontColor: "white", icon: <GrNotes />,content : "Consult all the reports created during the shifts." },
        { title: "Notifications", color: "#0484cc", fontColor: "white", icon: <GrNotification />,content : "See all your notifications here" },
        { title: "Submit Feedback", color: "#0484cc", fontColor: "white", icon: <GrLike />,content : "Please submit your feedback" },
    
      ]
    return (
        <div className='contentBox_cont'>
              {contentBoxes?.map(itm => {
                return (
                    

                  <div className='contentBox'>
                    

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

export default PO;
