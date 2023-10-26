const PrivacyPolicy = () => {
  const styles = {
    container: {
      fontFamily: "Arial, Helvetica, sans-serif",
      margin: "20px",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "10px",
    },
    title: {
      fontSize: "2em",
      marginBottom: "20px",
    },
    lastUpdated: {
      fontStyle: "italic",
      marginBottom: "20px",
    },
    sectionHeader: {
      fontSize: "1.5em",
      margin: "20px 0",
    },
    list: {
      listStyleType: "disc",
      marginLeft: "40px",
    },
    listItem: {
      marginBottom: "10px",
    },
    link: {
      color: "#007BFF",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Privacy Policy for Kiddl</h1>
      <p style={styles.lastUpdated}>
        <em>Last updated: 24 Oct 2023</em>
      </p>

      <h2 style={styles.sectionHeader}>2. Data We Collect</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <strong>Account Data</strong>: When you register, we collect basic
          details like email, username, and password.
        </li>
        <li style={styles.listItem}>
          <strong>Activity Data</strong>: We record activities selected, saved,
          or shared by you for improving user experience.
        </li>
        <li style={styles.listItem}>
          <strong>Usage Data</strong>: We may collect data on how you use the
          app, such as session duration.
        </li>
      </ul>

      <h2 style={styles.sectionHeader}>3. How We Use Data</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <strong>Service Maintenance</strong>: For account management,
          notifications, and ensuring seamless service.
        </li>
        <li style={styles.listItem}>
          <strong>Improvement</strong>: To analyze usage patterns and improve
          the app's features.
        </li>
        <li style={styles.listItem}>
          <strong>Communication</strong>: To send app updates, news, or
          promotional content.
        </li>
      </ul>

      <h2 style={styles.sectionHeader}>4. Data Sharing</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          We don’t sell, trade, or rent your personal information. We may share
          aggregated usage statistics with partners, without revealing
          individual identities.
        </li>
      </ul>

      <h2 style={styles.sectionHeader}>5. Data Storage</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          Your data is securely stored on servers compliant with international
          security standards.
        </li>
      </ul>

      <h2 style={styles.sectionHeader}>6. Children’s Privacy</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          Although our app is intended for children's entertainment, we do not
          knowingly collect information from children under 13 without parental
          consent.
        </li>
      </ul>

      <h2 style={styles.sectionHeader}>7. Your Rights</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          You can request access, correction, or deletion of your personal data
          anytime.
        </li>
      </ul>

      <h2 style={styles.sectionHeader}>8. Third-party Links</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          The app may contain links to external sites. We are not responsible
          for their content or privacy practices.
        </li>
      </ul>

      <h2 style={styles.sectionHeader}>9. Changes to Policy</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          We may update this policy occasionally. We'll notify you of
          significant changes.
        </li>
      </ul>

      <h2 style={styles.sectionHeader}>10. Contact</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          For questions or concerns, contact us at{" "}
          <a style={styles.link} href="mailto:joshsparkes6@gmail.com">
            [joshsparkes6@gmail.com]
          </a>
          .
        </li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;
