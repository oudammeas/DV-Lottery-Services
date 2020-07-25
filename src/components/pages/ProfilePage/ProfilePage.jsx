import React from "react";
import PropTypes from "prop-types";
import { Content, Panel, Button, ButtonToolbar, Form, FormGroup, FormControl, ControlLabel, HelpBlock } from "rsuite";
import MainLayout from "../../layouts/MainLayout.js/MainLayout";
import { useTranslation } from "react-i18next";



export const form_groups = [

  {
    "group_name": "Biological Information",
    "fields": [
      { "name": "firstname_kh", "label": "First Name (Khmer)", "type": "input" },
      { "name": "lastname_kh", "label": "Last Name (Khmer)", "type": "input" },
      { "name": "firstname", "label": "First Name", "type": "input" },
      { "name": "lastname", "label": "Last Name", "type": "input" },
      { "name": "date_of_birth", "label": "Date of Birth", "type": "date" },
      { "name": "gender", "label": "Gender", "type": "input" },
      { "name": "marital_status", "label": "Marital Status", "type": "input" },
      { "name": "number_of_dependent", "label": "Number of Dependent", "type": "number" },
      { "name": "portrait", "label": "Photo Portrait", "type": "image" },
      { "name": "upload_portrait", "label": "Upload Photo Portrait", "type": "file" },
      { "name": "passport_id", "label": "Passport No.", "type": "input" },
      { "name": "upload_passport", "label": "Upload Passport", "type": "file" },
      { "name": "passport_issue_date", "label": "Issue Date", "type": "input" },
      { "name": "passport_expiration_date", "label": "Expiration Date", "type": "input" },
      { "name": "national_id", "label": "National ID No.", "type": "input" },
      { "name": "upload_national_id", "label": "Upload National ID", "type": "file" },
      { "name": "driver_license_id", "label": "Driver License No.", "type": "input" },
      { "name": "upload_driver_license", "label": "Upload Driver License", "type": "file" },
      { "name": "marriage_certificate_id", "label": "Marriage Certificate No.", "type": "input" },
      { "name": "upload_marriage_certificate", "label": "Upload Marriage Certificate", "type": "file" }
    ]
  },

  {
    "group_name": "Contact Information", "fields": [
      { "name": "email", "label": "Email", "type": "email" },
      { "name": "phone_id", "label": "Phone No.", "type": "tel" }
    ]
  },

  {
    "group_name": "Spouse Information", "fields": [
      { "name": "firstname_spouse_kh", "label": "First Name (Khmer)", "type": "input" },
      { "name": "lastname_spouse_kh", "label": "Last Name (Khmer)", "type": "input" },
      { "name": "firstname_spouse", "label": "First Name", "type": "input" },
      { "name": "lastname_spouse", "label": "Last Name", "type": "input" },
      { "name": "national_id_spouse", "label": "National ID No.", "type": "input" }
    ]
  },
  {
    "group_name": "Dependent Information", "fields": [
      { "name": "firstname_depend_kh", "label": "First Name (Khmer)", "type": "input" },
      { "name": "lastname_depend_kh", "label": "Last Name (Khmer)", "type": "input" },
      { "name": "firstname_depend", "label": "First Name", "type": "input" },
      { "name": "lastname_depend", "label": "Last Name", "type": "input" },
      { "name": "national_id_depend", "label": "National ID No.", "type": "input" }
    ]
  },

  {
    "group_name": "Permanent Address", "fields": [
      { "name": "street", "label": "Street Address", "type": "input" },
      { "name": "province", "label": "Province", "type": "input" },
      { "name": "city", "label": "City", "type": "input" },
      { "name": "commune", "label": "Commune", "type": "input" },
      { "name": "village", "label": "Village", "type": "input" }
    ]
  },

  {
    "group_name": "Education Information", "fields": [
      { "name": "degree", "label": "Highest Educational Level", "type": "input" },
      { "name": "institute", "label": "Institution Name", "type": "input" },
      { "name": "date_start", "label": "Start Date", "type": "date" },
      { "name": "date_finish", "label": "Graduation Date", "type": "date" },
      { "name": "upload_diploma", "label": "Upload Diploma", "type": "file" }
    ]
  },

  {
    "group_name": "Current Employment Information", "fields": [
      { "name": "current_job_title", "label": "Position", "type": "input" },
      { "name": "current_job_employer", "label": "Employer", "type": "input" },
      { "name": "current_job_start_date", "label": "Start Date", "type": "date" }
    ]
  },
  {
    "group_name": "Previous Employment Information", "fields": [
      { "name": "previous_job_title", "label": "Position", "type": "input" },
      { "name": "previous_job_employer", "label": "Employer", "type": "input" },
      { "name": "previous_job_start_date", "label": "Start Date", "type": "date" },
      { "name": "previous_job_end_date", "label": "End Date", "type": "date" }
    ]
  }
];

const ProfilePage = () => {
  const { t } = useTranslation();

  const styles = {
    content: {
      padding: "1em",
      minHeight: "700px",
      maxWidth: "1280px",
      margin: "0 auto",
      textAlign: "start",
      justifyContent: "center",

    },

    formwrapper: {
      justifyContent: "center"
    },

    formtitle: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "1em",
    }

  };
  return (
    <MainLayout>
      <Content style={styles.content}>
        <div style={styles.formwrapper}>
          <div style={styles.formtitle}>{t("common.profile-page.form-title")}</div>
          <Form layout="horizontal">
            {form_groups.map((group, i) => {
              return (
                <div>
                  <h4 key={i}>{group.group_name}</h4>
                  {group.fields && group.fields.map((field, j) => {
                    return (
                      <FormGroup>
                        <ControlLabel>{field.label}</ControlLabel>
                        <FormControl type={field.type} name={field.name} key={j} />
                        {/* <HelpBlock tooltip>This field is required</HelpBlock> */}
                        <div>Edit</div>
                      </FormGroup>
                    )
                  })}
                </div>
              )
            })}

            <FormGroup>
              <ButtonToolbar>
                <Button appearance="primary">Submit</Button>
                <Button appearance="default">Cancel</Button>
              </ButtonToolbar>
            </FormGroup>
          </Form>
        </div>
      </Content>
    </MainLayout>
  );
};

ProfilePage.propTypes = {};

export default ProfilePage;
