import React, { ErrorInfo, PureComponent } from 'react';

import styles from './errorBoundary.module.scss';

interface Props {
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    // Оновлюємо стан, щоб наступний рендер показав запасний UI.
    return { hasError: true };
  }

  componentDidCatch(error:Error, errorInfo: ErrorInfo) {
    this.setState({ ...this.state, error });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.errorContainer}>
          <h2 className={styles.errorContainerTitle}>Что-то пошло не так.</h2>
          <p className={styles.errorContainerMessage}>{this?.state?.error?.message}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;