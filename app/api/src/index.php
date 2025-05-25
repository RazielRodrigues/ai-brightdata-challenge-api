<?php

require_once __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/InstagramAnalyzer.php';

use NeuronAI\Chat\Messages\UserMessage;
use NeuronAI\Exceptions\NeuronException;
use src\InstagramAnalyzer;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

$responseData = null;
$error = null;

if ($_SERVER['REQUEST_METHOD'] !== 'POST' || empty($_POST['profile'])) {
    header(header: 'Content-Type: application/json', response_code: 400);
    echo json_encode(['data' => 'Bad request']);
    exit;
}
$profile = filter_input(INPUT_POST, 'profile', FILTER_SANITIZE_STRING);

if (!is_string($profile)) {
    $error = "Send a valid profile username";
    header(header: 'Content-Type: application/json', response_code: 500);
    echo json_encode(['data' => $error]);
    exit;
}

$message = 'analyze the profile: https://www.instagram.com/' . $profile;
try {
    $response = InstagramAnalyzer::make()->structured(new UserMessage($message));
    $responseData = [];

    if ($response) {
        $responseData = [
            'Header' => $response->header,
            'Basic Information' => $response->basicInformation,
            'Profile Details' => $response->profileDetails,
            'Additional Information' => $response->additionalInformation,
            'Overall Note' => $response->overallNote,
            'Total Likes Average' => $response->likesCount,
        ];
    }

    header(header: 'Content-Type: application/json', response_code: 200);
    echo json_encode(['data' => $responseData]);
    exit;
} catch (NeuronException $e) {
    $error = "Something went wrong: " . $e->getMessage();
    header(header: 'Content-Type: application/json', response_code: 500);
    echo json_encode(['data' => $error]);
    exit;
}
