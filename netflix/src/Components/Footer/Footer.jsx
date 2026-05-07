import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

 export function Footer() {
  return (
    <div className='footer_outer_container'>
      <div className='footer_inner_container'>

        <div className='footer_icons'>
          <FacebookIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>

        <div className='footer_data'>
          
          <div className='footer_data_column'>
            <ul>
              <li>Audio and Subtitles</li>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className='footer_data_column'>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notices</li>
            </ul>
          </div>

          <div className='footer_data_column'>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>

          <div className='footer_data_column'>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>

        </div>

        <div className='service_code'>
          <button>Service Code</button>
        </div>

        <div className='copy_write'>
          <p>© 2026 Netflix Clone</p>
        </div>

      </div>
    </div>
  )
}


  

