import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './person-company-relation.reducer';
import { IPersonCompanyRelation } from 'app/shared/model/person-company-relation.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IPersonCompanyRelationProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class PersonCompanyRelation extends React.Component<IPersonCompanyRelationProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { personCompanyRelationList, match } = this.props;
    return (
      <div>
        <h2 id="person-company-relation-heading">
          <Translate contentKey="vnstartupdirApp.personCompanyRelation.home.title">Person Company Relations</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="vnstartupdirApp.personCompanyRelation.home.createLabel">Create a new Person Company Relation</Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          {personCompanyRelationList && personCompanyRelationList.length > 0 ? (
            <Table responsive>
              <thead>
                <tr>
                  <th>
                    <Translate contentKey="global.field.id">ID</Translate>
                  </th>
                  <th>
                    <Translate contentKey="vnstartupdirApp.personCompanyRelation.relationCode">Relation Code</Translate>
                  </th>
                  <th>
                    <Translate contentKey="vnstartupdirApp.personCompanyRelation.company">Company</Translate>
                  </th>
                  <th>
                    <Translate contentKey="vnstartupdirApp.personCompanyRelation.person">Person</Translate>
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {personCompanyRelationList.map((personCompanyRelation, i) => (
                  <tr key={`entity-${i}`}>
                    <td>
                      <Button tag={Link} to={`${match.url}/${personCompanyRelation.id}`} color="link" size="sm">
                        {personCompanyRelation.id}
                      </Button>
                    </td>
                    <td>{personCompanyRelation.relationCode}</td>
                    <td>
                      {personCompanyRelation.company ? (
                        <Link to={`company/${personCompanyRelation.company.id}`}>{personCompanyRelation.company.name}</Link>
                      ) : (
                        ''
                      )}
                    </td>
                    <td>
                      {personCompanyRelation.person ? (
                        <Link to={`person/${personCompanyRelation.person.id}`}>{personCompanyRelation.person.firstname}</Link>
                      ) : (
                        ''
                      )}
                    </td>
                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`${match.url}/${personCompanyRelation.id}`} color="info" size="sm">
                          <FontAwesomeIcon icon="eye" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.view">View</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${personCompanyRelation.id}/edit`} color="primary" size="sm">
                          <FontAwesomeIcon icon="pencil-alt" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.edit">Edit</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${personCompanyRelation.id}/delete`} color="danger" size="sm">
                          <FontAwesomeIcon icon="trash" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.delete">Delete</Translate>
                          </span>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <div className="alert alert-warning">
              <Translate contentKey="vnstartupdirApp.personCompanyRelation.home.notFound">No Person Company Relations found</Translate>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ personCompanyRelation }: IRootState) => ({
  personCompanyRelationList: personCompanyRelation.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonCompanyRelation);
