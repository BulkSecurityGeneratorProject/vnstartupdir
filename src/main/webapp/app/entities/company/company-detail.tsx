import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './company.reducer';
import { ICompany } from 'app/shared/model/company.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ICompanyDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class CompanyDetail extends React.Component<ICompanyDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { companyEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>{companyEntity.name}</h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="type">
                <Translate contentKey="vnstartupdirApp.company.type">Type</Translate>
              </span>
            </dt>
            <dd>{companyEntity.type}</dd>
            <dt>
              <span id="shortdescription">
                <Translate contentKey="vnstartupdirApp.company.shortdescription">Shortdescription</Translate>
              </span>
            </dt>
            <dd>{companyEntity.shortdescription}</dd>
            <dt>
              <span id="description">
                <Translate contentKey="vnstartupdirApp.company.description">Description</Translate>
              </span>
            </dt>
            <dd>{companyEntity.description}</dd>
            <dt>
              <span id="foundedon">
                <Translate contentKey="vnstartupdirApp.company.foundedon">Foundedon</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={companyEntity.foundedon} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="closedon">
                <Translate contentKey="vnstartupdirApp.company.closedon">Closedon</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={companyEntity.closedon} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="numemployeesmin">
                <Translate contentKey="vnstartupdirApp.company.numemployeesmin">Numemployeesmin</Translate>
              </span>
            </dt>
            <dd>{companyEntity.numemployeesmin}</dd>
            <dt>
              <span id="numemployeesmax">
                <Translate contentKey="vnstartupdirApp.company.numemployeesmax">Numemployeesmax</Translate>
              </span>
            </dt>
            <dd>{companyEntity.numemployeesmax}</dd>
            <dt>
              <span id="totalfundingusd">
                <Translate contentKey="vnstartupdirApp.company.totalfundingusd">Totalfundingusd</Translate>
              </span>
            </dt>
            <dd>{companyEntity.totalfundingusd}</dd>
            <dt>
              <span id="totalfundingvnd">
                <Translate contentKey="vnstartupdirApp.company.totalfundingvnd">Totalfundingvnd</Translate>
              </span>
            </dt>
            <dd>{companyEntity.totalfundingvnd}</dd>
            <dt>
              <span id="numberofinvestments">
                <Translate contentKey="vnstartupdirApp.company.numberofinvestments">Numberofinvestments</Translate>
              </span>
            </dt>
            <dd>{companyEntity.numberofinvestments}</dd>
            <dt>
              <span id="contactemail">
                <Translate contentKey="vnstartupdirApp.company.contactemail">Contactemail</Translate>
              </span>
            </dt>
            <dd>{companyEntity.contactemail}</dd>
            <dt>
              <span id="phonenumber">
                <Translate contentKey="vnstartupdirApp.company.phonenumber">Phonenumber</Translate>
              </span>
            </dt>
            <dd>{companyEntity.phonenumber}</dd>
            <dt>
              <span id="homepageurl">
                <Translate contentKey="vnstartupdirApp.company.homepageurl">Homepageurl</Translate>
              </span>
            </dt>
            <dd>{companyEntity.homepageurl}</dd>
            <dt>
              <span id="facebookurl">
                <Translate contentKey="vnstartupdirApp.company.facebookurl">Facebookurl</Translate>
              </span>
            </dt>
            <dd>{companyEntity.facebookurl}</dd>
            <dt>
              <span id="twitterurl">
                <Translate contentKey="vnstartupdirApp.company.twitterurl">Twitterurl</Translate>
              </span>
            </dt>
            <dd>{companyEntity.twitterurl}</dd>
            <dt>
              <span id="linkedinurl">
                <Translate contentKey="vnstartupdirApp.company.linkedinurl">Linkedinurl</Translate>
              </span>
            </dt>
            <dd>{companyEntity.linkedinurl}</dd>
            <dt>
              <span id="cityname">
                <Translate contentKey="vnstartupdirApp.company.cityname">Cityname</Translate>
              </span>
            </dt>
            <dd>{companyEntity.cityname}</dd>
            <dt>
              <span id="regionname">
                <Translate contentKey="vnstartupdirApp.company.regionname">Regionname</Translate>
              </span>
            </dt>
            <dd>{companyEntity.regionname}</dd>
            <dt>
              <span id="countrycode">
                <Translate contentKey="vnstartupdirApp.company.countrycode">Countrycode</Translate>
              </span>
            </dt>
            <dd>{companyEntity.countrycode}</dd>
            <dt>
              <Translate contentKey="vnstartupdirApp.company.assignedTo">Assigned To</Translate>
            </dt>
            <dd>{companyEntity.assignedToId ? companyEntity.assignedToId : ''}</dd>
            <dt>
              <Translate contentKey="vnstartupdirApp.company.createdBy">Created By</Translate>
            </dt>
            <dd>{companyEntity.createdById ? companyEntity.createdById : ''}</dd>
            <dt>
              <span id="createdat">
                <Translate contentKey="vnstartupdirApp.company.createdat">Createdat</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={companyEntity.createdat} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <Translate contentKey="vnstartupdirApp.company.updatedBy">Updated By</Translate>
            </dt>
            <dd>{companyEntity.updatedById ? companyEntity.updatedById : ''}</dd>
            <dt>
              <span id="updatedat">
                <Translate contentKey="vnstartupdirApp.company.updatedat">Updatedat</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={companyEntity.updatedat} type="date" format={APP_DATE_FORMAT} />
            </dd>
          </dl>
          <Button tag={Link} to="/entity/company" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/entity/company/${companyEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.edit">Edit</Translate>
            </span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ company }: IRootState) => ({
  companyEntity: company.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyDetail);
