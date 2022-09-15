// [Commented Class Dishdetail] For future ref because course progressed to functional components
// class Dishdetail extends Component {

//     constructor(props) {
//         super(props);

//     }


//     componentDidMount() {
//         console.log("Dishdetail Component componentDidMount is invoked")
//     }

//     componentDidUpdate() {
//         console.log("Dishdetail Component componentDidUpdate is invoked")
//     }

//     renderComments(dishComments) {

//         // Test print
//         // console.log(dishComments.comments);

//         // If dishComments is empty, return empty div
//         if (dishComments == null) {

//             return (
//                 <div>
//                 </div>
//             );

//         } else {

//             // Return individual dish comments via .map(...)
//             const eachComment = dishComments.comments.map((comment) => {
//                 return (

//                     <>
//                         <li><p>{comment.comment}</p></li>
//                         <li><p>--{comment.author},
//                             {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' })
//                                 .format(new Date(Date.parse(comment.date)))}</p></li>
//                     </>

//                 );
//             })

//             // return Comment Section
//             return (

//                 <div className="row">
//                     <div className="col-12 col-md m-1">
//                         <ul className="list-unstyled">
//                             {eachComment}
//                         </ul>
//                     </div>
//                 </div>

//             );
//         }



//     }

//     render() {

//         // Linking with 'dish' props with data that is passed by parent (MenuComponent.js)
//         const thisDish = this.props.dish;

//         // [Undefined] Dish details undefined
//         //console.log("DishDetails - thisDish", thisDish === undefined ? true: false);

//         // [Debug]
//         console.log("Dishdetail Component render invoked")

//         // [Resolve] Display empty div when this.props.dish (thisDish) is undefined on first render
//         if (thisDish === undefined) {

//             return (

//                 <div></div>
//             );

//         } else {

//             return (

//                 // Return Dish Detail Component and Comment Section
//                 <div className="container">
//                     <div class="row">
//                         {/* Dish Detail Card */}
//                         <div className="col-12 col-md-5 m-1">
//                             <Card key={thisDish.id}>
//                                 <CardImg top width="100%" src={thisDish.image} alt={thisDish.name} />
//                                 <CardBody>
//                                     <CardTitle>{thisDish.name}</CardTitle>
//                                     <CardText>{thisDish.description}</CardText>
//                                 </CardBody>
//                             </Card>
//                         </div>

//                         {/* Comment Section */}
//                         <div className="col-12 col-md-5 m-1">
//                             <div className="row">
//                                 <div className="col-12 col-md m-1">
//                                     <h4>Comments</h4>
//                                 </div>
//                             </div>
//                             {this.renderComments(thisDish)}
//                         </div>
//                     </div>


//                 </div>

//             );

//         }

//     }

// }