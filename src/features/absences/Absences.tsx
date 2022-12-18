
import { Console } from 'console';
import React, { useEffect, useState } from 'react';  
import { Alert, Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
 
import AbsencesTable from '../../components/AbsencesTable';
import absencesService from '../../services/absencesService';
import { filData, Member } from '../../utils/models';
import { getAbsencesList } from './absencesSlice';


export function Absences() {

  const dispatch = useAppDispatch();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [vacationType, setVacationType] = useState('');
  const [members, setMembers] = useState([]);

  const filter = () => {
  
    const _filData = new filData;
    _filData.startDate=startDate;
    _filData.endDate=endDate;
    _filData.type=vacationType;

    dispatch(getAbsencesList(_filData));
  };

  useEffect(() => {
   
   dispatch(getAbsencesList());
  }, [dispatch]);

  const {
    absences,
    loading,
    error,
  } = useAppSelector((state) => state.absencesReducer);
  
  return (
     <div>
      <Alert variant="warning">
      <h5>Crewmeister Challange test - programmer : Yasin Asadnezhad</h5>
        </Alert>

      <Card>
      <Card.Header>Filter <i></i></Card.Header>
      <Card.Body>
       
      <Form>
      <Row>
        <Col>
        <label>Start Date :</label>
          <Form.Control type="date" id="StartDate" placeholder="Start Date" onChange={(e) => {setStartDate(e.target.value); }}/>
        </Col>
        <Col>
        <label>End Date :</label>
          <Form.Control type="date" id="EndDate" placeholder="End Date" onChange={(e) => {setEndDate(e.target.value); }}/>
        </Col>
        <Col>
        <label>Vacation Type :</label>
        <Form.Select aria-label="Vacation Type" onChange={(e) => {setVacationType(e.target.value); }}>
        <option value="all">All</option>
        <option value="vacation">vacation</option>
        <option value="sickness">sickness</option>
    </Form.Select>
        </Col>
      </Row>
      <br />
      <Row> 
        <Col> 
        </Col>
        <Col>
        <Button variant="primary" onClick={filter}>Filter</Button>
        </Col>
        <Col>
 
        </Col>
      </Row>
    </Form>

      </Card.Body> 
    </Card>
      <br></br>
      <Card>
      <Card.Header>Data <i></i></Card.Header>
      <Card.Body>
      {error &&  <Alert variant='danger'>Data is loading</Alert> }
      {loading ? (
       <Spinner animation="border" role="status">
       <span className="visually-hidden">Loading...</span>
     </Spinner>
      ) : (
        <> 
        <label>Total absences is : {absences.length}</label>
        <AbsencesTable data={absences}></AbsencesTable>  
       
        </>
        //<label>Data is test {absences.length} </label>
      )} 
      </Card.Body>
    </Card>  
    </div>
  );
}
