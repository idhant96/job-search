import React, {useState} from 'react'
import {Card, Badge, Button, Collapse} from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'


export default function Jobs({job}) {

    const [open, setOpen] = useState(false)

    return (
       <Card>
           <Card.Body>
               <div className="d-flex justify-content-between">
                   <div>
                   <Card.Title>
                       {job.title} - <span className="text-muted font-weight-light">{job.company}</span> 
                   </Card.Title>
                        <Card.Subtitle className="text-muted mb-2">
                            {new Date(job.created_at).toLocaleDateString()}
                        </Card.Subtitle>
                    <Badge variant="primary" className="mr-2">{job.type}</Badge>
                    <Badge variant="secondary" >{job.location}</Badge>
                    
                    <Card.Text>
                        <Button 
                            onClick={() => setOpen(prevOpen => !prevOpen)}
                            variant="primary">{open ? "view details" : "hide details"}</Button>
                    </Card.Text>
                    <Collapse in={open}>
                       <ReactMarkdown source={job.description} />
                    </Collapse>
                    <div>
                    <ReactMarkdown source={job.how_to_apply} />
                    </div>
                    </div>
           

            
               <img className="d-none d-md-block" height="50" alt={job.company} src={job.company_logo} />

               </div>
           </Card.Body>
       </Card>
    )
}
 