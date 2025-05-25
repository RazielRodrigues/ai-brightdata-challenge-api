<?php

namespace src;

require_once __DIR__ . '/../vendor/autoload.php';

use NeuronAI\StructuredOutput\SchemaProperty;

class Analyzis
{

    #[SchemaProperty(description: 'Analyze header', required: true)]
    public string $header;

    #[SchemaProperty(description: 'Basic Information', required: true)]
    public string $basicInformation;

    #[SchemaProperty(description: 'Profile Details', required: true)]
    public string $profileDetails;

    #[SchemaProperty(description: 'Additional Information', required: true)]
    public string $additionalInformation;

    #[SchemaProperty(description: 'Overall Note', required: true)]
    public string $overallNote;

    #[SchemaProperty(description: 'Likes Count', required: false)]
    public string $likesCount;

}