import {Container, Row, Col} from "react-bootstrap";
import {cardSemua, semuaKelas} from "../data/index";

const KelasPage = () => {
  return (
    <div className="kelas-page">
    <div className="kelas min-vh-100">
      <Container>
        <Row>
          <Col>
          <h1 className="fw-bold text-center">Best Seller</h1>
          </Col>
        </Row>
        <Row>
           {cardSemua.map((card) => {
                          return(
                          <Col  key={card.id} className="shadow rounded">
                          <img src={card.image} alt="unsplash.com" className="mb-5 rounded-top"/>
                          {/* <div className="star mb-2">
                            <i className={kelas.star1}></i>
                            <i className={kelas.star2}></i>
                            <i className={kelas.star3}></i>
                            <i className={kelas.star4}></i>
                            <i className={kelas.star5}></i>
                          </div> */}
                          <h5 className="mb-5 px-3">{card.title}</h5>
                          <div className="ket d-flex justify-content-between allign-item-center px-3 pb-3"> 
                            {/* <p className="m-0 text-primary fw-bold">{kelas.price}</p> */}
                            <button className="btn btn-danger rounded-1">{card.buy}</button>
                          </div>
                          </Col>
                          );
                        })}
        </Row>
      </Container>
    </div>


    </div>
  )
}

export default KelasPage