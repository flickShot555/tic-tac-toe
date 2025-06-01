pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        // Jenkins will automatically check out the repo via "Pipeline script from SCM"
        echo 'Checking out source...'
      }
    }

    stage('Build') {
      steps {
        // Since my game is purely static (HTML/CSS/JS), i can skip actual build.
        // If I had a built script, i would invoke it here (e.g., sh './build.sh').
        echo 'No build step required for a static site.'
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploying to /var/www/html...'
        // Copy everything in the workspace to Apache web root.
        sh '''
          rm -rf /var/www/html/*
          cp -R * /var/www/html/
        '''
      }
    }
  }

  post {
    success {
      echo 'Pipeline finished successfully.'
    }
    failure {
      echo 'Pipeline failed. Check console output.'
    }
  }
}
