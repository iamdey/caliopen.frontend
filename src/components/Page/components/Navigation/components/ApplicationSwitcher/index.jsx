import React, { Component } from 'react';
import Presenter from './presenter';
import { getApplications } from '../../../../../../services/application-manager/';

// import { createSelector } from 'reselect';

// const applicationSelector = createSelector(
//   [
//   (state, props) => props.ApplicationManager.getInfos(state.applicationReducer.applicationName),
//   ],
//   (applicationInfos) => ({
//     currentApplication: { ...applicationInfos },
//   })
// );
//
// export class ApplicationSwitcherController {
//   $onInit() {
//     this.$scope.$on('$destroy', this.$ngRedux.connect((state) => applicationSelector(state, {
//       ApplicationManager: this.ApplicationManager,
//     }))(this));
//   }
//
//   isCurrentApplication(application) {
//     return angular.equals(application, this.currentApplication);
//   }
// }

class ApplicationSwitcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
    };
  }

  render() {
    const applications = getApplications();

    const appSwitchProps = {
      applications,
      currentApplication: applications[0],
      isState: () => true,
      isDropdownOpen: this.state.isDropdownOpen,
      onDropdownToggle: (isDropdownOpen) => {
        this.setState({ isDropdownOpen });
      },
    };

    return <Presenter {...appSwitchProps} />;
  }
}

export default ApplicationSwitcher;
