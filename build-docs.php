<?php

declare(strict_types=1);

require __DIR__ . '/vendor/autoload.php';

use Docsmith\Docsmith;

Docsmith::make()
    ->readmeIndex(__DIR__ . '/README.md')
    ->readmeSkipSections(['Notes', 'Contributing', 'Author', 'Install'])
    ->output(__DIR__ . '/docs')
    ->title('Laravel PHP Attributes List')
    ->description('A curated list of PHP Attributes available in Laravel Framework.')
    ->build();