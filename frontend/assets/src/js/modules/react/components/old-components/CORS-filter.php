<?php
// DID NOT WORK
add_filter('allowed_http_origins', 'add_allowed_origins');
function add_allowed_origins($origins)
{
 $origins[] = 'http://localhost:10004';
 $origins[] = 'https://site2.example.com';
 return $origins;
}