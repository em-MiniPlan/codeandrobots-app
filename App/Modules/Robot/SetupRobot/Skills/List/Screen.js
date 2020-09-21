import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Container, CompactListItem, Footer, Card } from 'App/Components'

export default class SetupRobotSkillsScreen extends Component {
  static propTypes = {
    skills: PropTypes.arrayOf(PropTypes.object).isRequired,
    onSkillPress: PropTypes.func.isRequired,
    onAddPress: PropTypes.func.isRequired
  }

  render () {
    const { skills, onSkillPress, onAddPress } = this.props
    return (
      <Container>
        {skills && skills.map(skill =>
          <CompactListItem
            key={skill.category}
            title={skill.category}
            subtitle={`${skill.items.length}`}
            onPress={() => { onSkillPress(skill) }} />
        )}
        <Footer style={{ paddingTop: 34 }}>
          <Card
            button='Add'
            onPress={onAddPress}
          />
        </Footer>
      </Container>
    )
  }
}
