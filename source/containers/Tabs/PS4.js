pimport React, {Component} from 'react';
import PageHeading from 'components/PageHeading';
import Container from 'components/Container';
import Table from 'components/Table';
import {connect} from 'react-redux';


class PS4 extends Component {
  render() {
    const {ps4} = this.props;
    return (
      <div>
        <PageHeading
          title="PS4 Games!!!"
        />
        <Container style={{marginTop: '2rem'}}>
          <Table {...ps4} />
        </Container>
      </div>
    )
  }
}

export default connect(
  state => ({
    commands: state.commands.table
  })
)(Commands)
